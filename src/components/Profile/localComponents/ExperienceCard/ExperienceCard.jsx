import React, { useRef } from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import data from "../../../../data.json";
import "./ExperienceCard.css";
import { MdOutlineEdit } from "react-icons/md";
import ExperiencePopUp from "../../../PopUps/ExperiencePopUp/ExperiencePopUp";

const ExperienceCard = () => {
  const modalButtonRef = useRef(null);

  const handleIconClick = () => {
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
  };

  const ExperienceCardData = data.ExperienceCardData;

  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Experience </h3>
        <a className="icon" onClick={handleIconClick}>
          <MdOutlineEdit />
        </a>
      </div>
      {ExperienceCardData.map((data, index) => (
        <div key={index} className="text-afterline-rapo-another">
          <a>{data.heading}</a>
          <p className="text-afterline-rapo-p">{data.text}</p>
        </div>
      ))}
      <ExperiencePopUp ref={modalButtonRef} />
    </div>
  );
};

export default ExperienceCard;
