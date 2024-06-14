import React from "react";
import "./UserName.css";

function UserName({ value, onChange }) {
  return (
    <div>
      <div
        style={{ height: "42px", borderRadius: "3px" }}
        className="bg-white border border-dark d-flex align-items-center shadow-sm"
      >
        <input
          type="text"
          className="w-100 px-2 pt-1 pb-1 d-flex align-items-center"
          id="UserName"
          style={{ height: "16px" }}
          placeholder="Name"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default UserName;
