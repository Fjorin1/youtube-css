import React from "react";
import "./Ushtrime.css";

const Ushtrime = () => {
  return (
    <div className="maci-div">
      <div className="flex-classs">
        <p className="maci-text">Home</p>
        <button className="maci-notification">14</button>
      </div>
      <div className="flex-classs">
        <p className="maci-text">Notification</p>
        <button className="maci-notification">3</button>
      </div>
      <div className="flex-classs">
        <p className="maci-text">Messages</p>
        <button className="maci-notification">5</button>
      </div>
    </div>
  );
};

export default Ushtrime;
