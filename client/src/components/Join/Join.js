import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Now !</h1>
        <div>
          <input
            placeholder="Your Name ..."
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="The Room ..."
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            <span role="img" aria-label="emoji">
              ➡️
            </span>{" "}
            Sign In{" "}
            <span role="img" aria-label="emoji">
              ⬅️
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
