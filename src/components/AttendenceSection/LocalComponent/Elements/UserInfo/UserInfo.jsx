import React from "react";
import "./UserInfo.css";

function UserInfo({ defaultText, options, value, onChange }) {
  return (
    <div className="w-100">
      <div
        className="w-100 border d-flex align-items-center bg-white border border-dark px-2"
        style={{ height: "42px", borderRadius: "3px" }}
      >
        <select
          className="w-100"
          id="defaultText"
          value={value}
          onChange={onChange}
        >
          <option value="">{defaultText}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default UserInfo;
