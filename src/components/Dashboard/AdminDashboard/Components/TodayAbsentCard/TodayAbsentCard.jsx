import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodayAbsentCard.css";
import { TodayAbsentCardData } from "../../Content";
// import { TodayAbsentCardData } from "../../Content";

function TodayAbsentCard() {
  return (
    <Card className="TimesheetCard g-5">
      <Card.Body className="card-body">
        <h3 className="card-title d-flex gap-2">
          Today Absent <span className="card-title-span p-2">5</span>
        </h3>
        {TodayAbsentCardData.map((item) => (
          <div
            key={item}
            className="TodayAbsentCard-data-main-rapo border border-dark border-2"
          >
            <div className="image-name-rapo d-flex gap-2 align-items-center">
              <img
                className="image  d-flex align-items-center"
                src={item.image}
                alt=""
              />
              <p>{item.minitext}</p>
            </div>
            <div className="heading-txt-span-main-rapo d-flex justify-content-between  align-items-center">
              <div className="heading-txt-span-rapo d-grid align-items-start my-2">
                <h6>{item.heading}</h6>
                <span>{item.spanone}</span>
              </div>
              <div className="">
                <span
                  className={item.spantwo === "Approved" ? "approved" : "span"}
                >
                  {item.spantwo}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-light">
            Load more
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TodayAbsentCard;
