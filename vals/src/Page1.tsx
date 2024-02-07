// Page1.tsx

import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import "./Page1.css";

function Page1(): JSX.Element {
  return (
    <div className="container">
      <div className="card">
        <h2 className="message">
          Hey you,
          <br />
          It's been a long time since I've known you, and you're an amazing
          person. And I know you don't usually believe me but I want you to know
          that you're the most amazing person I've ever met. <br />
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
