import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { ExperienceCardData } from "../../Context/index";
import "./ExperienceCard.css";
import { MdOutlineEdit } from "react-icons/md";
const ExperienceCard = () => {
  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">ExperienceCard </h3>
        <a href="#" className="icon">
          <MdOutlineEdit />
        </a>
      </div>
      {ExperienceCardData.map((item, index) => (
        <div key={item} className="text-afterline-rapo-another">
          <a href="#">{item.heading}</a>
          <p className="text-afterline-rapo-p ">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;