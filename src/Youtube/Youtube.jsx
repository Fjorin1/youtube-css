import React from "react";
import "./youtube.css";
import Thumbnail1 from "../Assets/thumbnail-1.webp";
import Thumbnail2 from "../Assets/thumbnail-2.webp";
import Thumbnail3 from "../Assets/thumbnail-3.webp";
import Thumbnail4 from "../Assets/thumbnail-4.webp";
import Thumbnail5 from "../Assets/thumbnail-5.webp";
import Thumbnail6 from "../Assets/thumbnail-6.webp";
import Icon1 from "../Assets/channel-1.jpeg";
import Icon2 from "../Assets/channel-2.jpeg";
import Icon3 from "../Assets/channel-3.jpeg";
import Icon4 from "../Assets/channel-4.jpeg";
import Icon5 from "../Assets/channel-5.jpeg";
import Icon6 from "../Assets/channel-6.jpeg";

const Youtube = () => {
  return (
    <>
      <div className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail1} alt="Thumbnail" />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon1} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-author">Marques Brown</p>
              <p className="video-stats">3.4M Views &#183; 6 months ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail2} alt="Thumbnail" />
            <div className="video-time">8:22</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon2} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">Try Not To Laugh Challenge &#35;9</p>
              <p className="video-author">Markiplier</p>
              <p className="video-stats">19M views &#183; 4 years ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail3} alt="Thumbnail" />
            <div className="video-time">9:13</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon3} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail4} alt="Thumbnail" />
            <div className="video-time">22:09</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon4} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">
                The Simplest Math Problem No One Can Solve - Collatz Conjecture
              </p>
              <p className="video-author">Veritasium</p>
              <p className="video-stats">18M views &#183; 4 months ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail5} alt="Thumbnail" />
            <div className="video-time">11:17</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon5} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">
                Kadane's Algorithm to Maximum Sum Subarray Problem
              </p>
              <p className="video-author">CS Dojo</p>
              <p className="video-stats">519K views &#183; 5 years ago</p>
            </div>
          </div>
        </div>
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="youtube-img" src={Thumbnail6} alt="Thumbnail" />
            <div className="video-time">19:59</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img className="youtube-section-icon" src={Icon6} alt="Icon" />
            </div>
            <div className="channel-content">
              <p className="video-title">
                Anything You Can Fit In The Circle I’ll Pay For
              </p>
              <p className="video-author">MrBeast</p>
              <p className="video-stats">141M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
