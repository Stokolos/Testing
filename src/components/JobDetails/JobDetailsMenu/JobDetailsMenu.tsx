import React from "react";
import Rectangle from "../../Img/Rectangle.png";
import Shape from '../../Img/Shape.png'
import "./JobDetailsMenu.css";

const JobDetailsMenu = () => {
  return (
    <div className="wrapper-job-details-menu">
     <span className="text-logo">Job Details</span>
      <div className="wrapper-action">
        <div className="wrapper-save-to-my-list">
          <img src={Rectangle} alt="img" className="save-icon" />
         <span className="text-save">Save to my list</span>
        </div>
        <div className="wrapper-share">
          <img src={Shape} alt="img" className="share-icon" />
          <span className="text-share">Share</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsMenu;
