import {useState} from "react";
import "./AdditionalInfo.css";

const AdditionalInfo = () => {

    const [work, setWork] = useState('')

  const employmentTypes = ["Full time", "Part time", "Temporary"];

  const workingTime = (employmentTypes: string) => {
    setWork(employmentTypes)
    console.log(work)
  } 

  return (
    <div className="wrapper-additional-info">
      <h3 className="header-additional-info">Additional info</h3>
      <p className="employment-type">Employment type</p>
      <div className="wrapper-employment-type-button">
        {employmentTypes.map((employmentType: string, index: number): any => {
          return (
            <button key={index} onClick={() => workingTime(employmentType)} className="employment-type-button">
              {employmentType}
            </button>
          );
        })}
      </div>
      <p className="benefits">Benefits</p>
      <button className="flexible-shedule" style={{ marginRight: "10px" }}>
        Flexible shedule
      </button>
      <button className="relocation-assistance">Relocation assistance</button>
    </div>
  );
};

export default AdditionalInfo;
