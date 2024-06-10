import React, { useState } from "react";
import { AddEmployeePopUpData } from "../Data/data.js";
import "./AddEmployeePopUpInputText.css";

const AddEmployeePopUpInputText = () => {
  // Initialize state with default values for selector inputs
  const initialState = AddEmployeePopUpData.map((item) =>
    item.type === "selector" ? item.options[0] : ""
  );

  const [selectedOptions, setSelectedOptions] = useState(initialState);

  const handleSelect = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      {AddEmployeePopUpData.map((item, index) => (
        <div key={index} className="col-lg-6">
          <div className="popup-inputs-label-rapo mb-3">
            <label>
              {item.heading}
              {item.span && <span className="text-danger">{item.span}</span>}
            </label>
            {item.type === "selector" ? (
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control AddEmployeePopUp-pop-up-input text-dark"
                  aria-label="Text input with dropdown button"
                  value={selectedOptions[index]}
                  readOnly
                />
                <button
                  className="btn dropdown-toggle AddEmployeePopUpInputText-dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {item.options.map((option, idx) => (
                    <li key={idx}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleSelect(index, option)}
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
                  type={item.type}
                  className="form-control AddEmployeePopUp-pop-up-input text-dark"
                  id="recipient-name"
                  placeholder={item.placeholder}
                />
                {item.icon && (
                  <div className="AddEmployeePopUp-icon">{item.icon}</div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddEmployeePopUpInputText;
