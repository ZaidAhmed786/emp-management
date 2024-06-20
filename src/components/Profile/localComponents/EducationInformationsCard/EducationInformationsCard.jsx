import React, { useRef } from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import "./EducationInformationsCard.css";
import { MdOutlineEdit } from "react-icons/md";
import EducationPopUp from "../../../PopUps/EducationPopUp/EducationPopUp";
import { EducationInformationsCardData } from "../../Context/index";

const EducationInformationsCard = () => {
  const modalButtonRef = useRef(null);

  const handleIconClick = () => {
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
  };

  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Education Informations </h3>
        <a className="icon" onClick={handleIconClick}>
          <MdOutlineEdit />
        </a>
      </div>
      {EducationInformationsCardData.map((item, index) => (
        <div key={index} className="text-afterline-rapo">
          <a>{item.heading}</a>
          <p className="text-afterline-rapo-p ">{item.text}</p>
          <p className="text-afterline-rapo-second-p ">{item.texttwo}</p>
        </div>
      ))}
      <EducationPopUp ref={modalButtonRef} />
    </div>
  );
};

export default EducationInformationsCard;
