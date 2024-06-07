import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { BankInformationCardData } from "../../Context/index";

import { MdOutlineEdit } from "react-icons/md";
const BankInformationCard = () => {
  return (
    <div className="mt-3 BankInformationCard-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Personal Informations </h3>
      </div>
      {BankInformationCardData.map((item, index) => (
        <div key={index} className="info-txt-rapo d-flex align-items-center">
          <div
            style={{
              color: "rgb(187 196 204 / 1)",
              fontWeight: "500",
              fontSize: "15px",
              width: "100%",
            }}
          >
            <h6 className="text-dark" >{item.heading}</h6>
          </div>
          <div className="d-grid text-main-rap align-items-center">
            <div className="image-txt-rapo d-flex">
              {item.text ? <p className="text-muted">{item.text}</p> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInformationCard;
