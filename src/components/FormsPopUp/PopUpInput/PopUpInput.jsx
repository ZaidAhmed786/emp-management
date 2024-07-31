import React, { useState } from "react";
import "./PopUpInput.css";

const PopUpInput = ({ data, index }) => {
  const initialState = data.type === "selector" ? data.options[0] : "";
  const [selectedOption, setSelectedOption] = useState(initialState);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="col-lg-12">
      <div className="popup-inputs-label-rapo mb-3">
        <label>
          {data.heading}
          {data.span && <span className="text-danger">{data.span}</span>}
        </label>
        {data.type === "selector" ? (
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control AddEmployeePopUp-input"
              aria-label="Text input with dropdown button"
              value={selectedOption}
              placeholder={data.placeholder}
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
              {data.options.map((option, idx) => (
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
              type={data.type}
              className="form-control AddEmployeePopUp-pop-up-input text-dark"
              id="recipient-name"
              placeholder={data.placeholder}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PopUpInput;
