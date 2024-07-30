import React, { useState } from "react";
import "./AddUserPopUpInputText.css";

const AddUserPopUpInputText = ({ data, index }) => {
  const initialState = data.type === "selector" ? data.options[0] : "";
  const [selectedOption, setSelectedOption] = useState(initialState);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="col-lg-6">
      <div className="popup-inputs-label-rapo mb-3">
        <label>
          {data.heading}
          {data.span && <span className="text-danger">{data.span}</span>}
        </label>
        {data.type === "selector" ? (
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control AddUserPopUp-pop-up-input text-dark"
              aria-label="Text input with dropdown button"
              value={selectedOption}
              readOnly
            />
            <button
              className="btn dropdown-toggle AddUserPopUpInputText-dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
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
              className="form-control AddUserPopUp-pop-up-input text-dark"
              id="recipient-name"
              placeholder={data.placeholder}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AddUserPopUpInputText;
