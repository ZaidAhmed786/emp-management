import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import data from "../../../../data.json";

import { MdOutlineEdit } from "react-icons/md";
const BankInformationCard = () => {
  const BankInformationCardData = data.BankInformationCardData;
  return (
    <div className="mt-3 BankInformationCard-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Bank Information </h3>
      </div>
      {BankInformationCardData.map((data, index) => (
        <div key={index} className="info-txt-rapo d-flex align-items-center">
          <div
            style={{
              color: "rgb(187 196 204 / 1)",
              fontWeight: "500",
              fontSize: "15px",
              width: "100%",
            }}
          >
            <h6 className="text-dark">{data.heading}</h6>
          </div>
          <div className="d-grid text-main-rap align-items-center">
            <div className="image-txt-rapo d-flex">
              {data.text ? <p className="text-muted">{data.text}</p> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInformationCard;
