import React, { useRef } from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { EducationInformationsCardData } from "../Context";
import "./EducationInformationsCard.css";
import { MdOutlineEdit } from "react-icons/md";
import PopUp from "../PopUp/PopUp";
const EducationInformationsCard = () => {
  const modalButtonRef = useRef(null);

  const handleIconClick = () => {
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
  };
  return (
    <div className="mt-3 Card-col p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3>Personal Informations </h3>
        <a href="#" className="icon" onClick={handleIconClick}>
          <MdOutlineEdit />
        </a>
      </div>
      {EducationInformationsCardData.map((item, index) => (
        <div key={item} className="text-afterline-rapo">
          <a href="#">{item.heading}</a>
          <p className="text-afterline-rapo-p ">{item.text}</p>
          <p className="text-afterline-rapo-second-p ">{item.texttwo}</p>
        </div>
      ))}
      <PopUp ref={modalButtonRef} />
    </div>
  );
};

export default EducationInformationsCard;
