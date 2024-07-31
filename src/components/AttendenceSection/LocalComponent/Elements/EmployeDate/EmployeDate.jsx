import React from "react";
import "./EmployeDate.css";
const EmployeDate = ({ value, onChange }) => {
  return (
    <div>
      <div
        style={{
          height: "42px",
          borderRadius: "3px",
        }}
        className="bg-white border border-dark d-flex align-items-center shadow-sm "
      >
        <label className="ms-2" htmlFor="">
          {" "}
          Date
        </label>
        <input
          type="date"
          className="w-100 px-2 pt-1 pb-1 d-flex align-items-center justify-content-end"
          id="EmployeeName"
          style={{ height: "16px" }}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default EmployeDate;
