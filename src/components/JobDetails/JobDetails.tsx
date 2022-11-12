import React from "react";
import { Link } from "react-router-dom";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import AttachedImages from "./AttachedImages/AttachedImages";
import JobDescription from "./JobDescription/JobDescription";
import JobDetailsMenu from "./JobDetailsMenu/JobDetailsMenu";
import JobName from "./JobName/JobName";
import Mapa from "./Mapa/Mapa";

const JobDetails = () => {
  return (
    <>
      <div className="wrapper-job-details">
        <JobDetailsMenu></JobDetailsMenu>
        <Link to={"/JobBoard"} className="apply-now">
          APPLY NOW
        </Link>
        <JobName></JobName>
        <JobDescription></JobDescription>
        <AdditionalInfo></AdditionalInfo>
        <AttachedImages></AttachedImages>
        <Link to='/JobBoard' className="button-prev-page">
          <span className="arrow"></span>RETURN TO JOB BOARD
        </Link>
      </div>
      <Mapa></Mapa>
    </>
  );
};

export default JobDetails;
