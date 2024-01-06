import React from "react";
import "./sidebar.css";
import Home from "./../../Assets/home.svg";
import Explore from "./../../Assets/explore.svg";
import Subscriptions from "./../../Assets/subscriptions.svg";
import Originals from "./../../Assets/originals.svg";
import Music from "./../../Assets/youtube-music.svg";
import Library from "./../../Assets/library.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-link">
          <img className="sidebar-link-img" src={Home} alt="Home" />
          <div className="sidebar-link-description">Home</div>
        </div>
        <div className="sidebar-link">
          <img className="sidebar-link-img" src={Explore} alt="Explore" />
          <div className="sidebar-link-description">Explore</div>
        </div>
        <div className="sidebar-link">
          <img
            className="sidebar-link-img"
            src={Subscriptions}
            alt="Subscriptions"
          />
          <div className="sidebar-link-description">Subscriptions</div>
        </div>
        <div className="sidebar-link">
          <img className="sidebar-link-img" src={Originals} alt="Originals" />
          <div className="sidebar-link-description">Originals</div>
        </div>
        <div className="sidebar-link">
          <img className="sidebar-link-img" src={Music} alt="Music" />
          <div className="sidebar-link-description">Youtube Music</div>
        </div>
        <div className="sidebar-link">
          <img className="sidebar-link-img" src={Library} alt="Library" />
          <div className="sidebar-link-description">Library</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
