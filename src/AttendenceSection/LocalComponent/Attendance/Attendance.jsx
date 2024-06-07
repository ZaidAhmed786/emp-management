import React from "react";
import PageDetails from "../../LocalComponent/Page Details/PageDetails";
import EmployeDetails from "../../LocalComponent/Employe Details/EmployeDetails";
import Performance from "../../LocalComponent/Employe Performance/Performance";

function Attendance() {
  return (
    <div className="p-3 bg-light vh-100">
      <PageDetails />
      <EmployeDetails />
      <Performance />
    </div>
  );
}

export default Attendance;
