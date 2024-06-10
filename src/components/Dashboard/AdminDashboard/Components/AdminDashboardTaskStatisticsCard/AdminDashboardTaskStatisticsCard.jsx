import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboardTaskStatisticsCard.css";
import data  from "../../../../../data.json";
import { FaRegCircleDot } from "react-icons/fa6";

function AdminDashboardTaskStatisticsCard() {
  const { AdminDashboardTaskStatisticsCardData } = data;
  return (
    <Card className="TimesheetCard bg-white g-5">
      <Card.Body className="card-body">
        <h3 className="card-title text-dark">Task Statistics</h3>
        <div className="row two-txt-boxes-main-rapo d-flex justify-content-between">
          <div className="col-lg-6">
            <div className="first-txt-box border border-dark border-1  p-2">
              <p className="text-dark"> Total Tasks</p>
              <h3 className="text-dark">385</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="first-txt-box border border-dark border-1 p-2">
              <p className="text-dark">Overdue Tasks</p>
              <h3 className="text-dark">19</h3>
            </div>
          </div>
        </div>
        <div className="progress-color-bar d-flex">
          <div className="f-p-b">30%</div>
          <div className="s-p-b">22%</div>
          <div className="t-p-b">24%</div>
          <div className="fo-p-b">21%</div>
          <div className="fi-p-b">10%</div>
        </div>
        {AdminDashboardTaskStatisticsCardData.map((item, index) => (
          <div
            key={index}
            className="icon-heading-mini-txt-rapo d-flex justify-content-between"
          >
            <div className="icon-heading d-flex align-items-center gap-2">
              <i style={{ color: item.color }}><FaRegCircleDot /></i>
              <h6 className="text-dark">{item.heading}</h6>
            </div>
            <div className="mini-txt">
              <p className="text-dark"> {item.minitext}</p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default AdminDashboardTaskStatisticsCard;
