// Page1.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import "./Page1.css";

function Page1(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <h2 className="message">
          Dear [Person],<br />
          It's been a long time since I've known you, and you're an amazing person.<br />
          So, I want to ask you a question...
        </h2>
      </div>
      <Link to="/page2" className="button">
        <FaArrowDown className="arrow-icon" />
      </Link>
    </div>
  );
}

export default Page1;

