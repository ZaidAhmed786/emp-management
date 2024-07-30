import React from "react";
import "./UserRoleTable.css";

function UserRoleTable() {
  return (
    <div
      id="main-div"
      className="d-flex justify-content-center align-items-center"
      style={{ overflowX: "auto" }}
    >
      <table className="bg-white" id="table">
        <thead>
          <tr id="row-1">
            <th id="head-text" className="px-3">
              Module Permission
            </th>
            <th id="head-text" className="px-3">
              Read
            </th>
            <th id="head-text" className="px-3">
              Write
            </th>
            <th id="head-text" className="px-3">
              Create
            </th>
            <th id="head-text" className="px-3">
              Delete
            </th>
            <th id="head-text" className="px-3">
              Import
            </th>
            <th id="head-text" className="px-3">
              Export
            </th>
          </tr>
        </thead>
        <tbody>
          {["Employee", "Holidays", "Leaves", "Events"].map((module, index) => (
            <tr key={index} id="body-rows">
              <td className="px-3 py-0" id="body-text">
                {module}
              </td>
              {Array.from({ length: 6 }).map((_, i) => (
                <td key={i} id="body-input" className="py-0">
                  <input type="checkbox" defaultChecked />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRoleTable;
