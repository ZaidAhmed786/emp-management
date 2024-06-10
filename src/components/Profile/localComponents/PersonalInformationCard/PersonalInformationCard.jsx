import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import data from "../../../../data.json";
import { MdOutlineEdit } from "react-icons/md";
const PersonalInformationCard = () => {
  const PersonalInformationCardData = data.PersonalInformationCardData;
  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Personal Informations</h3>
        <a href="#" className="icon">
          <MdOutlineEdit />
        </a>
      </div>
      {PersonalInformationCardData.map((data, index) => (
        <div key={index} className="info-txt-rapo d-flex align-items-center">
          <div
            style={{
              color: "rgb(187 196 204 / 1)",
              fontWeight: "500",
              fontSize: "15px",
              width: "50%",
            }}
          >
            <h6 className="text-dark">{data.heading}</h6>
          </div>
          <div className="d-grid text-main-rap align-items-center">
            <div className="image-txt-rapo d-flex">
              {data.textlink ? <a href="#">{data.textlink}</a> : null}
              {data.text ? <p>{data.text}</p> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalInformationCard;
