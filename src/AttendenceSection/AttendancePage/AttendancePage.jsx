import React from "react";
import Attendance from "../LocalComponent/Attendance/Attendance";
import Cards from "../LocalComponent/AttendanceCards/Cards/Cards";
const AttendancePage = () => {
  return (
    <>
      <Cards />
      <Attendance />
    </>
  );
};

export default AttendancePage;
