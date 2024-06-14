import React, { useRef } from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { EducationInformationsCardData } from "../../Context/index";
import "./EducationInformationsCard.css";
import { MdOutlineEdit } from "react-icons/md";
import PopUp from "../../../PopUp/PopUp";
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
        <div key={item} className="text-afterline-rapo">
          <a>{item.heading}</a>
          <p className="text-afterline-rapo-p ">{item.text}</p>
          <p className="text-afterline-rapo-second-p ">{item.texttwo}</p>
        </div>
      ))}
      <PopUp ref={modalButtonRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        excepturi eum rerum possimus aperiam tempora quia rem mollitia at
        impedit, facilis beatae eius? Quaerat ex nemo delectus cum amet
        praesentium.<></>
      </PopUp>
    </div>
  );
};

export default EducationInformationsCard;
