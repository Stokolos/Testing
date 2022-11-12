import React from "react";
import "./JobName.css";

const JobName = () => {
  return (
    <div className="wrapper-job-name">
      <div className="wrapper-text-job-name">
        <p className="job-name">
          Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
          Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
          Fachärztin für Arbeitsmedizin (m/w/d)
        </p>
        <p className="date-post">Posted 2 days ago</p>
      </div>
      <div className="wrapper-money">
        <p className="money">€ 54 000—60 000</p>
        <p className="brutto">Brutto, per year</p>
      </div>
    </div>
  );
};

export default JobName;
