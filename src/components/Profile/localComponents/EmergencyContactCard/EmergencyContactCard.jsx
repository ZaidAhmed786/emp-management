import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { EmergencyContactCardData } from "../../Context/index";
import { MdOutlineEdit } from "react-icons/md";

const EmergencyContactCard = () => {
  return (
    <div className="mt-3 Card-col bg-white p-4">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Emergency Contact</h3>
        <a href="#" className="icon ">
          <MdOutlineEdit />
        </a>
      </div>
      {EmergencyContactCardData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="mb-4">
            <h6 className="text-dark">{section.section}</h6>
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="info-txt-rapo d-flex align-items-center mb-2"
              >
                <div
                  style={{
                    color: "rgb(187 196 204 / 1)",
                    fontWeight: "500",
                    fontSize: "15px",
                    width: "50%",
                  }}
                >
                  <h6 className="text-dark">{item.heading}</h6>
                </div>
                <div className="d-grid text-main-rap align-items-center">
                  <div className="image-txt-rapo d-flex">
                    <p style={{ color: item.color }}>  {item.text}</p>
                    <p  style={{ lineHeight: "0px" }} style={{ color: item.color }}>{item.texttwo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {sectionIndex < EmergencyContactCardData.length - 1 && (
            <hr className="my-4 center-line" />
          )}
        </div>
      ))}
    </div>
  );
};

export default EmergencyContactCard;
