import React from "react";
import EmployeDetails from "../../LocalComponent/Employe Details/EmployeDetails";
import Performance from "../../LocalComponent/Employe Performance/Performance";

function Attendance() {
  return (
    <div className="bg-light px-3 pt-3 pb-4">
      <EmployeDetails />
      {/* <Performance /> */}
    </div>
  );
}

export default Attendance;
