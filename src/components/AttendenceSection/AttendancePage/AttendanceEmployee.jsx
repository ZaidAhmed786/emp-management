import React from "react";
import PageDetails from "../LocalComponent/Page Details/PageDetails";
import Attendance from "../LocalComponent/Attendance/Attendance";

const AttendanceEmployee = () => {
  return (
    <>
      <div className="w-100">
        <PageDetails />
        <Attendance />
      </div>
    </>
  );
};

export default AttendanceEmployee;
