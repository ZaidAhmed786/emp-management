import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboardTaskStatisticsCard.css";
import { AdminDashboardTaskStatisticsCardData } from "../../Content";

function AdminDashboardTaskStatisticsCard() {
  return (
    <Card className="TimesheetCard g-5">
      <Card.Body className="card-body">
        <h3 className="card-title">Task Statistics</h3>
        <div className="row two-txt-boxes-main-rapo d-flex justify-content-between">
          <div className="col-lg-6">
            <div className="first-txt-box border border-dark border-2  p-2">
              <p>Total Tasks</p>
              <h3>385</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="first-txt-box border border-dark border-2 p-2">
              <p>Overdue Tasks</p>
              <h3>19</h3>
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
              <i style={{ color: item.color }}>{item.icon}</i>
              <h6>{item.heading}</h6>
            </div>
            <div className="mini-txt">
              <p>{item.minitext}</p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default AdminDashboardTaskStatisticsCard;
