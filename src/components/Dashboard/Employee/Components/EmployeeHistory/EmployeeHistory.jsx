import React from "react";
import "./EmployeeHistory.css";
import { LuBuilding } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import data from "../../../../../data.json";
import { TiUserAddOutline } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import datatwo from "../../../../../data.json";

const EmployeeHistory = () => {
  const EmployeeHistoryData = data.EmployeeHistory;
  const EmployeeHistoryDataTwo = datatwo.EmployeeHistorySecond;
  const icons = [
    <FaRegHourglass className="text-danger" />,
    <PiBagFill className="text-muted" />,
    <LuBuilding className="text-muted" />,
    <PiBagFill className="text-muted" />,
    <PiBagFill className="text-muted" />,
    <TiUserAddOutline className="text-muted" />,
    <FaCalendarAlt className="text-muted" />,
  ];

  return (
    <>
      <section className="EmployeeHistory bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {EmployeeHistoryData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="EmployeeHistory-heading-rows-rapo">
                    <h2 className="text-dark my-5">{item.heading}</h2>
                  </div>
                  <div className="EmployeeHistory-info-main-rapo bg-white border border-gray border-1 d-flex justify-content-between">
                    <div className="icon-heading-image-main-rapo d-flex gap-4 ">
                      <i>{icons[index]}</i>
                      <p
                        className={
                          index === 0
                            ? "text-danger fw-bold"
                            : "text-muted fw-bold"
                        }
                      >
                        {item.text}
                      </p>
                    </div>
                    <div className="image d-flex me-4">
                      <img
                        className="rounded-pill user-image"
                        src={item.imageone}
                        alt=""
                      />
                      {item.imagetwo && (
                        <img
                          className="rounded-pill user-image-two"
                          src={item.imagetwo}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              {EmployeeHistoryDataTwo.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="EmployeeHistory-heading-second-cols-rapo">
                    <h5 className="text-dark fw-bold my-5">{item.heading}</h5>
                  </div>
                  <div className="EmployeeHistory-info-main-rapo bg-white border border-gray border-1 d-grid">
                    <div className="total-pending-task-rapo d-flex justify-content-around align-items-center">
                      <div className="total-task d-grid text-center">
                        <h4 className="text-dark">{item.totaltasknumber}</h4>
                        <p className="text-muted">{item.totaltasktext}</p>
                      </div>
                      <div className="pending-task text-center">
                        <h4 className="text-dark">{item.pendingtasknumber}</h4>
                        <p className="text-muted">{item.pendingtasktext}</p>
                      </div>
                    </div>
                    <div className="total-project text-center">
                      <h4 className="text-dark">{item.totalprojectnumber}</h4>
                      <p className="text-muted">{item.totalprojecttext}</p>
                    </div>
                    {item.buttontext && (
                      <div className="total-project text-center">
                        <button
                          type="button"
                          className="btn btn-warning text-white fw-bold"
                        >
                          {item.buttontext}
                        </button>
                      </div>
                    )}
                    <div className="upcoming-text text-center">
                      <h5 className="text-dark">{item.upcomingtext}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeHistory;
