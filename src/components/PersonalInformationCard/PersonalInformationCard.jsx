import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { PersonalInformationCardData } from "../Context";
import { MdOutlineEdit } from "react-icons/md";
const PersonalInformationCard = () => {
  return (
    <div className="mt-3 Card-col p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3>Personal Informations</h3>
        <a href="#" className="icon">
          <MdOutlineEdit />
        </a>
      </div>
      {PersonalInformationCardData.map((item, index) => (
        <div key={index} className="info-txt-rapo d-flex align-items-center">
          <div
            style={{
              color: "rgb(187 196 204 / 1)",
              fontWeight: "500",
              fontSize: "15px",
              width: "50%",
            }}
          >
            <h6>{item.heading}</h6>
          </div>
          <div className="d-grid text-main-rap align-items-center">
            <div className="image-txt-rapo d-flex">
              {item.textlink ? <a href="#">{item.textlink}</a> : null}
              {item.text ? <p>{item.text}</p> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalInformationCard;
