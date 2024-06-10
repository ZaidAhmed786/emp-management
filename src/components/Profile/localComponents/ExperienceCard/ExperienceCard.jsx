import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import data from "../../../../data.json";
import "./ExperienceCard.css";
import { MdOutlineEdit } from "react-icons/md";
const ExperienceCard = () => {
  const ExperienceCardData = data.ExperienceCardData;
  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">ExperienceCard </h3>
        <a href="#" className="icon">
          <MdOutlineEdit />
        </a>
      </div>
      {ExperienceCardData.map((data, index) => (
        <div key={data} className="text-afterline-rapo-another">
          <a href="#">{data.heading}</a>
          <p className="text-afterline-rapo-p ">{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
