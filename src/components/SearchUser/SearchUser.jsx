import React, { useState } from "react";
import UserInfo from "../AttendenceSection/LocalComponent/Elements/UserInfo/UserInfo";
import Search from "../AttendenceSection/LocalComponent/Elements/Search Button/Search";
import UserName from "../AttendenceSection/LocalComponent/Elements/UserName/UserName";

function SearchUser() {
  const [user, setUser] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const company = ["Global Technologies", "Delta Infotech"];

  const role = [
    "Web Developer",
    "Web Designer",
    "Android Developer",
    "Ios Developer",
  ];

  //   const handleSearch = () => {
  //     const filtered = employeeData
  //       .filter((emp) =>
  //         emp.name.toLowerCase().includes(employeeName.toLowerCase())
  //       )
  //       .map((emp) => ({
  //         ...emp,
  //         performance: emp.performance.filter((perf) => {
  //           const date = new Date(perf.date);
  //           return (
  //             date.getMonth() + 1 === months.indexOf(selectedMonth) + 1 &&
  //             date.getFullYear() === parseInt(selectedYear)
  //           );
  //         }),
  //       }));
  //     setFilteredData(filtered);
  //   };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <UserName value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <UserInfo
            defaultText="Select Client"
            options={company}
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <UserInfo
            defaultText="Select Roll"
            options={role}
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-3">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
