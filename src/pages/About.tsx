import { Navbar } from "../components/utils/Navbar";
import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Bun, Elysia & React</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/About.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div>
          <h2>This is the about page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod voluptatum, quae, voluptatem, quos voluptate quia quibusdam
            quas voluptatibus quidem doloribus. Quisquam quod voluptatum, quae,
            voluptatem, quos voluptate quia quibusdam quas voluptatibus quidem
            doloribus.
          </p>
        </div>
      </body>
    </html>
  );
};

export default About;
