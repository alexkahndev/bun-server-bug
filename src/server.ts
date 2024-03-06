import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { createElement } from "react";
import { neon } from "@neondatabase/serverless";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

const host = Bun.env.HOST || "localhost";
const port = Bun.env.PORT || 5000;

await Bun.build({
  entrypoints: [
    "./src/indexes/HomeIndex.tsx",
    "./src/indexes/AboutIndex.tsx",
    "./src/indexes/HelpIndex.tsx",
  ],
  outdir: "./build",
  minify: true,
});

if (Bun.env.DATABASE_URL) {
  try {
    const sql = neon(Bun.env.DATABASE_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
  
} else {
  console.error("DATABASE_URL is not defined");
}

const doYouLikeSwaggerUIBetter = false;

async function handleRequest(
  pageComponent: React.ComponentType,
  index: string,
) {
  const page = createElement(pageComponent);
  const stream = await renderToReadableStream(page, {
    bootstrapScripts: [index],
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
}

if (Bun.env.DATABASE_URL) {
  const sql = neon(Bun.env.DATABASE_URL); // This line causes the error
} else {
  console.error("DATABASE_URL is not defined");
}

export const server = new Elysia()
  .use(
    staticPlugin({
      assets: "./build",
      prefix: "",
    }),
  )
  .use(
    swagger({
      provider: doYouLikeSwaggerUIBetter ? "swagger-ui" : "scalar",
    }),
  )
  .get("/", () => handleRequest(Home, "/HomeIndex.js"))
  .get("/about", () => handleRequest(About, "/AboutIndex.js"))
  .get("/help", () => handleRequest(Help, "/HelpIndex.js"))
  .listen(5000, () => {
    console.log(`server started on http://${host}:${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
