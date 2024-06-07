import React from "react";
import "../ProfileFristSection/ProfileFristSection.css";
import { MdOutlineEdit } from "react-icons/md";
import "./FamilyInformationsCard.css";
import { FamilyInformationsCardData } from "../Context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const FamilyInformationsCard = () => {
  return (
    <div className="mt-3 Card-col bg-white p-4 family-information-card">
      <div className="PersonalInformationCard-heading mb-3 d-flex align-items-center">
        <h3 className="text-dark">Family Informations </h3>
        <a href="#" className="icon">
          <MdOutlineEdit />
        </a>
      </div>
      <div className="table-container">
        <div className="table-responsive d-flex align-items-end">
          {FamilyInformationsCardData.map((item, index) => (
            <table key={index} className="table">
              <thead>
                <tr>
                  <th className="table-th text-dark" scope="col">
                    {item.heading}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    scope="row"
                    className="d-flex justify-content-between align-items-center text-dark"
                  >
                    {typeof item.text === "string" ? (
                      item.text
                    ) : (
                      
                      <DropdownMenu/>
                      
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyInformationsCard;
