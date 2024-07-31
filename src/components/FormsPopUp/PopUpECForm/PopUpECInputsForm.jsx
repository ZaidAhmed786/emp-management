import React, { useState } from "react";
import "../../AddEmployeePopUpInputText/AddEmployeePopUpInputText.css";
import "../../AddEmployeePopUp/AddEmployeePopUp.css";
const PopUpECFormInputs = ({ ECdata, index }) => {
  const initialState = ECdata.type === "selector" ? ECdata.options[0] : "";
  const [selectedOption, setSelectedOption] = useState(initialState);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="col-lg-6">
      <div className="popup-inputs-label-rapo mb-3">
        <label>
          {ECdata.heading}
          {ECdata.span && <span className="text-danger">{ECdata.span}</span>}
        </label>
        {ECdata.type === "selector" ? (
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
              style={{padding: "10px 12px", marginLeft: "10px"}}
            ></button>
            <ul className="dropdown-menu dropdown-menu-end">
              {ECdata.options.map((option, idx) => (
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
              type={ECdata.type}
              className="form-control AddEmployeePopUp-pop-up-input text-dark bg-white"
              id="recipient-name"
              placeholder={ECdata.placeholder}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PopUpECFormInputs;
