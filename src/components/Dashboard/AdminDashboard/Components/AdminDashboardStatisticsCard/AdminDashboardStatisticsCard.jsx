import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboardStatisticsCard.css";
import { AdminDashboardStatisticsCardData } from "../../Content";

function getProgressColor(days) {
  const colorMap = {
    "Today Leave": "bg-today-leave",
    "Pending Invoice": "bg-pending-invoice",
    "Completed Projects": "bg-completed-projects",
    "Open Tickets": "bg-open-tickets",
    "Closed Tickets": "bg-closed-tickets",
  };
  return colorMap[days] || "bg-default"; // Default to a generic class if not found
}

function AdminDashboardStatisticsCard() {
  const initialProgress = AdminDashboardStatisticsCardData.map((item) =>
    parseFloat(item.Rating)
  );
  const [progress, setProgress] = useState(initialProgress);

  const handleDrag = (e, index) => {
    const rect = e.target.parentNode.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(
      100,
      Math.max(0, (offsetX / rect.width) * 100)
    );
    setProgress(progress.map((p, i) => (i === index ? newProgress : p)));
  };

  const handleMouseDown = (e, index) => {
    document.addEventListener("mousemove", (event) => handleDrag(event, index));
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", (event) =>
          handleDrag(event, index)
        );
      },
      { once: true }
    );
  };

  return (
    <Card className="TimesheetCard g-5">
      <Card.Body className="card-body">
        <h3 className="card-title">Statistics</h3>
        {AdminDashboardStatisticsCardData.map((item, index) => {
          const progressColorClass = getProgressColor(item.Days);
          const progressValue = progress[index];
          return (
            <div
              key={index}
              className="text-time-box-rapo border border-dark border-2"
            >
              <div className="StatisticsCard-heading-txt-rapo d-flex justify-content-between">
                <div className="StatisticsCard-heading">
                  <h5>{item.Days}</h5>
                </div>
                <div className="StatisticsCard-txt d-flex">
                  <h5>{item.Rating}</h5>
                  <h5>{item.Timing}</h5>
                </div>
              </div>
              <div
                className="progress-bar-container"
                onMouseDown={(e) => handleMouseDown(e, index)}
              >
                <div
                  className={`progress-bar-fill ${progressColorClass}`}
                  style={{ width: `${progressValue}%` }}
                ></div>
                <div
                  className="progress-bar-handle"
                  style={{ left: `${progressValue}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default AdminDashboardStatisticsCard;
