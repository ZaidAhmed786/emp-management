import React, { useState } from "react";
import "../../AddEmployeePopUpInputText/AddEmployeePopUpInputText.css";
import "../../AddEmployeePopUp/AddEmployeePopUp.css";
const PopUpInpupageEI = ({ EIdata, index }) => {
  const initialState = EIdata.type === "selector" ? EIdata.options[0] : "";
  const [selectedOption, setSelectedOption] = useState(initialState);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="col-lg-6">
      <div className="popup-inputs-label-rapo mb-3">
        <label>
          {EIdata.heading}
          {EIdata.span && <span className="text-danger">{EIdata.span}</span>}
        </label>
        {EIdata.type === "selector" ? (
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control AddEmployeePopUp-pop-up-input text-dark bg-white"
              aria-label="Text input with dropdown button"
              value={selectedOption}
              readOnly
            />
            <button
              className="btn dropdown-toggle AddEmployeePopUpInputText-dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu dropdown-menu-end">
              {EIdata.options.map((option, idx) => (
                <li key={idx}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <input
              type={EIdata.type}
              className="form-control AddEmployeePopUp-pop-up-input text-dark bg-white"
              id="recipient-name"
              placeholder={EIdata.placeholder}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PopUpInpupageEI;
