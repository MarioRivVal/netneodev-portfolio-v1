/* eslint-disable react/prop-types */

import { useState } from "react";
import { smoothScrolling } from "../functions";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleSmoothScrolling = (e) => {
    smoothScrolling(e);
    setIsNavActive(false);
  };

  const handleCheckboxChange = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={`navigation ${isNavActive ? "navigation-active" : ""}`}>
      <div className="navigation-button" onClick={handleCheckboxChange}>
        <span className="navigation-icon">&nbsp;</span>
      </div>
      <div className="navigation-background">&nbsp;</div>
      <nav className="navigation-nav">
        <ul className="navigation-list">
          <li>
            <a
              className="navigation-link"
              href="#header"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#portfolio"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#about"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#resume"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#testimonial"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
