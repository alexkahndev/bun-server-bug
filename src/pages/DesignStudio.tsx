import React from 'react';
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";

const DesignStudio = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Design Studio - Logo365.AI</title>
        <meta name="description" content="Start designing with Logo365.AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/DesignStudio.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <div className="container">
        <body>
          <Navbar />
          <div className="content">
              <div className="start-container">
                <h1>Get Started with our Design Studio!</h1>
                <button className="start-button">Click to Begin</button>
              </div>
          </div>
          <Footer />
        </body>
      </div>
    </html>
  );
};
export default DesignStudio;