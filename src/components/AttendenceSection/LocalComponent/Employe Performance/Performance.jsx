import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import "./Modal.css";
import ProfilePopUp from "../../../PopUps/ProfilePopUp/ProfilePopUp";

function Performance({ data = [], month, year }) {
  const location = useLocation();
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

  const isAdminPage = location.pathname === "/attendance-page";

  return (
    <>
      {isAdminPage ? (
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
      ) : (
        <div className="table-responsive">
          <table className="table bg-white" style={{ minWidth: "600px" }}>
            <thead>
              <tr>
                <th className="text-dark">#</th>
                <th className="text-dark">Date</th>
                <th className="text-dark">Punch In</th>
                <th className="text-dark">Punch Out</th>
                <th className="text-dark">Production</th>
                <th className="text-dark">Break</th>
                <th className="text-dark">Overtime</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-dark">1</td>
                <td className="text-dark">19 Feb 2019</td>
                <td className="text-dark">10 AM</td>
                <td className="text-dark">7 PM</td>
                <td className="text-dark">9 hrs</td>
                <td className="text-dark">1 hr</td>
                <td className="text-dark">0</td>
              </tr>
              <tr>
                <td className="text-dark"> 2</td>
                <td className="text-dark">20 Feb 2019</td>
                <td className="text-dark">9 AM</td>
                <td className="text-dark">6 PM</td>
                <td className="text-dark">9 hrs</td>
                <td className="text-dark">1 hr</td>
                <td className="text-dark">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Performance;
