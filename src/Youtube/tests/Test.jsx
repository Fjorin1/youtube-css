import React from "react";
import "./test.css";
import Cat from "./../../Assets/cat.jpg";
import Cat2 from "./../../Assets/cat2.jpg";
import Cat3 from "./../../Assets/cat3.jpg";

const Test = () => {
  return (
    <>
      <div className="card-preview12">
        <img className="cat-image" alt="Cat" src={Cat} />
        <header className="cat-name">Oliver</header>
        <p className="cat-paragraph">2 mutual friends</p>
        <button className="cat-btn">Add Friend</button>
      </div>

      <div className="card-preview12">
        <img className="cat-image" alt="Cat" src={Cat2} />
        <header className="cat-name">Mimi</header>
        <p className="cat-paragraph">7 mutual friends</p>
        <button className="cat-btn">Add Friend</button>
      </div>

      <div className="card-preview12">
        <img className="cat-image" alt="Cat" src={Cat3} />
        <header className="cat-name">Angry Rex</header>
        <p className="cat-paragraph">No mutual friends</p>
        <button className="cat-btn">Add Friend</button>
      </div>
    </>
  );
};

export default Test;
