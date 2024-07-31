import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import ProfilePopUp from "../../../PopUps/ProfilePopUp/ProfilePopUp";

function Performance({ data = [], month, year }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const modalButtonRef = useRef(null);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const monthIndex = new Date(`${month} 1, ${year}`).getMonth() + 1;
  const daysInMonth = getDaysInMonth(monthIndex, year);

  const handleImageClick = (employee) => {
    setSelectedEmployee(employee);
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  return (
    <div
      className="table-responsive"
      style={{ maxWidth: "100%", overflowX: "auto" }}
    >
      <table className="table bg-white" style={{ minWidth: "1500px" }}>
        <thead>
          <tr>
            <th
              style={{
                fontSize: "11px",
                fontFamily: "poppins",
                minWidth: "170px",
                border: "none",
              }}
              className="ps-3"
            >
              Employee
            </th>
            {Array.from({ length: daysInMonth }, (_, i) => (
              <th
                key={i + 1}
                className="text-center"
                style={{
                  minWidth: "50px",
                  fontSize: "11px",
                  fontFamily: "poppins",
                  border: "none",
                }}
              >
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index}>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "poppins",
                  minWidth: "170px",
                }}
                className="ps-3 d-flex align-items-center"
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(emp)}
                />
                {emp.name}
              </td>
              {Array.from({ length: daysInMonth }, (_, i) => {
                const dayPerformance = emp.performance.find(
                  (perf) => new Date(perf.date).getDate() === i + 1
                );
                return (
                  <td
                    key={i + 1}
                    className="text-center"
                    style={{ minWidth: "50px", fontSize: "17px" }}
                  >
                    {dayPerformance ? dayPerformance.status : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <ProfilePopUp ref={modalButtonRef} />}
    </div>
  );
}

export default Performance;
