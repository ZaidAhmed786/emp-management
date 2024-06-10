import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../TimesheetCard/TimesheetCard.css";
import "./StatisticsCard.css";
import { StatisticsCardData } from "../../../Constants/index";

function getProgressColor(days) {
  const colorMap = {
    Overtime: "bg-overtime",
    Today: "bg-today",
    "This Week": "bg-this-week",
    "This Month": "bg-this-month",
    Remaining: "bg-remaining",
  };
  return colorMap[days] || "bg-overtime"; // Default to blue if day is not found
}

function StatisticsCard() {
  const initialProgress = StatisticsCardData.map((item) =>
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

  return (
    <Card className="TimesheetCard g-5 bg-white  border border-gary border-1">
      <Card.Body className="card-body">
        <h3 className="card-title text-dark">Statistics</h3>
        {StatisticsCardData.map((item, index) => {
          const progressColorClass = getProgressColor(item.Days);
          const progressValue = progress[index];
          return (
            <div
              key={item.Days}
              className="text-time-box-rapo border border-gray border-2"
            >
              <div className="StatisticsCard-heading-txt-rapo d-flex justify-content-between">
                <div className="StatisticsCard-heading">
                  <h5 className="text-dark">{item.Days}</h5>
                </div>
                <div className="StatisticsCard-txt d-flex">
                  <h5 className="text-dark">{item.Rating}</h5>
                  <h5 className="text-dark">{item.Timing}</h5>
                </div>
              </div>
              <div
                className="progress-bar-container"
                onMouseDown={(e) => handleDrag(e, index)}
                onMouseMove={(e) => e.buttons === 1 && handleDrag(e, index)}
              >
                <div
                  className={`progress-bar-fill ${progressColorClass}`}
                  style={{ width: `${progressValue}%` }}
                ></div>
                <div
                  className="progress-bar-handle"
                  style={{ left: `${progressValue}%` }}
                  draggable="true"
                  onDrag={(e) => handleDrag(e, index)}
                ></div>
              </div>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default StatisticsCard;
