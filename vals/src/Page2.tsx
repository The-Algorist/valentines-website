// Page2.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon
import "./Page2.css";

const phrases: string[] = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
];

function Page2(): JSX.Element {
  const [noCount, setCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const yesButtonSize: number = noCount * 20 + 16;

  function handleNoClick(): void {
    setCount(noCount + 1);
    // setYesPressed(false);
  }

  function getNoButtonText(): string {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <div className="gif-container">
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="kissing bear"
            />
          </div>
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <div className="gif-container">
            <img
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="bear with roses"
            />
          </div>
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div className="btn-container">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes 😍
            </button>
            <div style={{ width: '10px' }} /> {/* Add space between buttons */}
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()} 😢
            </button>
          </div>
          {/* Add arrow to go back to Page 1 */}
          <div className="back-arrow-container">
            <Link to="/" className="back-arrow">
              <FaArrowLeft className="arrow-icon" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Page2;
