import { Navbar } from "../components/utils/Navbar";

import { useState } from "react";

const Help = () => {
  const [trigger, setTrigger] = useState(true);

  const closePopup = () => {
    setTrigger(false);
  };

  

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Bun, Elysia & React</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Help.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
      {trigger && (
        <div className="modal-overlay">
        <div className="modal-content">
          <h2>Help</h2>
          <div className="help-container">
              <div className="info">
              <h3>This is help popup</h3>
            </div>
          
        </div>
        {/* Close button for the help modal */}
        <button className="close" onClick={closePopup}>
              X
            </button>
      </div>
    </div>
  )}

        
      </body>
    </html>
  );
};

export default Help;
