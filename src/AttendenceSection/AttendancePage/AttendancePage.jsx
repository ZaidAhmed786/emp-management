import React from "react";
import Attendance from "../LocalComponent/Attendance/Attendance";
import Cards from "../LocalComponent/AttendanceCards/Cards/Cards";
import AddEmployeePopUp from "../../AddEmployeePopUp/AddEmployeePopUp";
const AttendancePage = () => {
  return (
    <>
      <Cards />
      <Attendance />
      <AddEmployeePopUp />
    </>
  );
};

export default AttendancePage;
