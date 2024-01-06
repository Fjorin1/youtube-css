import React from "react";
import "./header.css";
import Hamburger from "./../../Assets/hamburger-menu.svg";
import YoutubeIcon from "./../../Assets/youtube-logo.svg";
import Upload from "./../../Assets/upload.svg";
import YoutubeApps from "./../../Assets/youtube-apps.svg";
import Search from "./../../Assets/search.svg";
import Notifications from "./../../Assets/notifications.svg";
import MyChannel from "./../../Assets/my-channel.jpeg";
import VoiceSearch from "./../../Assets/voice-search-icon.svg";

const Header = () => {
  return (
    <div>
      <div className="Header-youtube">
        <div className="left-section">
          <img
            className="left-section-hamburger"
            src={Hamburger}
            alt="Hamburger Icon"
          />
          <img
            className="left-section-youtube-icon"
            src={YoutubeIcon}
            alt="Youtube Logo"
          />
        </div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="middle-section-search-btn">
            <img
              className="middle-section-search-btn-img"
              src={Search}
              alt="Search Icon"
            />
            <div className="search-description">Search</div>
          </button>
          <button className="middle-section-search-voice">
            <img
              className="middle-section-search-voice-btn"
              src={VoiceSearch}
              alt="Voice-Search Icon"
            />
            <div className="search-description">Search with your voice</div>
          </button>
        </div>
        <div className="right-section">
          <div className="upload-description">
            <img
              className="right-section-upload-icon"
              src={Upload}
              alt="Upload Icon"
            />
            <div className="search-description">Create</div>
          </div>
          <div className="youtube-apps-description">
            <img
              className="right-section-youtube-apps-icon"
              src={YoutubeApps}
              alt="YoutubeApps"
            />
            <div className="search-description">YouTube apps</div>
          </div>
          <div className="right-section-notification-wrapper">
            <div className="notifications-description">
              <img
                className="right-section-notification-icon"
                src={Notifications}
                alt="Notifications"
              />
              <div className="search-description">Notifications</div>
            </div>
            <div className="notification-number">3</div>
          </div>

          <img
            className="right-section-my-channel"
            src={MyChannel}
            alt="MyChannel Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
