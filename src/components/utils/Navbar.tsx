import React, { useState } from "react";
import Help from "../../pages/Help";

export const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleHelpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="navbar">
      <nav>
        <div className="option">
          <a href="/designstudio">Design Studio</a>
          <a href="/about">About</a>
          <a href="/help" onClick={handleHelpClick}>
            Help
          </a>

          <a href="/pricing">Pricing</a>
        </div>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Home" />
        </a>
        <div className="right-buttons">
          <a href="/login" className="button">
            Login
          </a>
          <a href="/register" className="button">
            Register
          </a>
        </div>
      </nav>

      {showPopup && <Help />}
    </header>
  );
};
