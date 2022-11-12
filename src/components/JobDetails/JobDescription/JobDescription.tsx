import React from "react";
import { Link } from "react-router-dom";
import "./JobDescription.css";

const JobDescription = () => {
  return (
    <div className="wrapper-job-description">
      <p className="text-content-style">
        At WellStar, we all share common goals. That’s what makes us so
        successful – and such an integral part of our communities. We want the
        same things, for our organization, for our patients, and for our
        colleagues. As the most integrated healthcare provider in Georgia, this
        means we pride ourselves on investing in the communities that we serve.
        We continue to provide innovative care models, focused on improving
        quality and access to healthcare.
      </p>
      <span className="header">Responsopilities</span>
      <p className="text-content-style">
        Wellstar Medical Group, a physician-led multi-specialty group in
        Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
        surgeon to join their existing cardiovascular program. This is an
        opportunity to play a key role on a multidisciplinary team of
        cardiologists and surgeons. The ideal candidate will have five or more
        years of experience in cardiac surgery. This candidate should be facile
        with off-pump revascularization, complex aortic surgery, minimally
        invasive valve and valve repair, transcatheter valve replacement,
        surgical atrial fibrillation ablation, ventricular assist device
        placement, and extra corporeal membrane oxygenation. Wellstar is one of
        the largest integrated healthcare systems in the Southeast with 11
        hospitals in Atlanta metro region. With two open heart programs at
        Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar
        cardiac surgeons perform over 1200 cardiac procedures per year. The
        cardiac service line is the only center in Georgia with the Joint
        Commission’s Comprehensive Cardiac Center certification.
      </p>
      <span className="header">Compensation & Benefits:</span>
      <p className="text-content-style">
        Our physicians enjoy a wide range of benefits, including:
      </p>
      <ul className="text-content-style">
        <li>Very competitive compensation package with bonuses</li>
        <li>Medical, Dental, and Vision Insurance</li>
        <li>Occurrence-based Malpractice Coverage</li>
        <li>
          Short-term and Long-term Disability Insurance and life insurance
        </li>
      </ul>
      <Link to={"/JobBoard"} className="apply-now">
        APPLY NOW
      </Link>
    </div>
  );
};

export default JobDescription;
