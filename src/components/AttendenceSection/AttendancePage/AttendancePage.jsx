import React from "react";
import Attendance from "../LocalComponent/Attendance/Attendance";
import Cards from "../LocalComponent/AttendanceCards/Cards/Cards";
import PageDetails from "../LocalComponent/Page Details/PageDetails";
// import AddEmployeePopUp from "../../AddEmployeePopUp/AddEmployeePopUp";
const AttendancePage = () => {
  return (
    <>
      <div>
        <PageDetails />
        <Cards />
        <Attendance />
        {/* <AddEmployeePopUp /> */}
      </div>
    </>
  );
};

export default AttendancePage;
