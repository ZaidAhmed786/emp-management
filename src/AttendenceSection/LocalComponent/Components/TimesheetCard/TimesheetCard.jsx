import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TimesheetCard.css";
function TimesheetCard() {
  return (
    <Card className="TimesheetCard g-5 bg-white">
      <Card.Body className="card-body">
        <h3 className="card-title text-dark">
          Timesheet <span>11 Mar 2019</span>
        </h3>
        <div className="text-time-box-rapo border border-gary border-2 bg-light">
          <p className="text-dark">
            Punch In at
            <br />
            <span>Wed, 11th Mar 2019 10.00 AM</span>
          </p>
        </div>
        <div className="timer-box-main-rapo d-flex justify-content-center">
          <div className="timer-box border border-gray border-5 bg-light">
            <p className="text-dark">3.45 hrs</p>
          </div>
        </div>
        <div className="TimesheetCard-btn d-flex justify-content-center text-center">
          <button
            type="button"
            className="d-flex text-center btn  btn-warning  px-5 py-2 rounded-pill  fw-bold text-white "
          >
            Punch Out
          </button>
        </div>
        <div className="two-txt-boxes-main-rapo d-flex justify-content-center gap-2 ">
          <div className="first-txt-box border border-gray border-2  py-2 px-5 bg-light">
            <p className="text-dark">Break</p>
            <h6 className="text-dark">1.21 hrs</h6>
          </div>
          <div className="first-txt-box border border-gray border-2 py-2 px-5 bg-light">
            <p className="text-dark">Break</p>
            <h6 className="text-dark">1.21 hrs</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TimesheetCard;
