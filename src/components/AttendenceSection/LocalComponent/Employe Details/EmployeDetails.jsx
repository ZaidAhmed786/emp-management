import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EmployeName from "../../LocalComponent/Elements/Employe Name/EmployeName";
import MonthYear from "../../LocalComponent/Elements/Month and Year/MonthYear";
import Search from "../../LocalComponent/Elements/Search Button/Search";
import Performance from "../Employe Performance/Performance";
import { employeeData } from "../data";
import EmployeDate from "../Elements/EmployeDate/EmployeDate";

function EmployeDetails() {
  const location = useLocation();
  const [employeeName, setEmployeeName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = ["2019", "2018", "2017", "2016", "2015"];

  const handleSearch = () => {
    const filtered = employeeData
      .filter((emp) =>
        emp.name.toLowerCase().includes(employeeName.toLowerCase())
      )
      .map((emp) => ({
        ...emp,
        performance: emp.performance.filter((perf) => {
          const date = new Date(perf.date);
          return (
            date.getMonth() + 1 === months.indexOf(selectedMonth) + 1 &&
            date.getFullYear() === parseInt(selectedYear)
          );
        }),
      }));
    setFilteredData(filtered);
  };

  const isAdminPage = location.pathname === "/attendance-page";

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          {isAdminPage ? (
            <EmployeName
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          ) : (
            <EmployeDate
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          )}
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <MonthYear
            defaultText="Select Month"
            options={months}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <MonthYear
            defaultText="Select Year"
            options={years}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <Search onClick={handleSearch} />
        </div>
      </div>
      {filteredData.length > 0 && (
        <Performance
          data={filteredData}
          month={selectedMonth}
          year={selectedYear}
        />
      )}
    </div>
  );
}

export default EmployeDetails;
