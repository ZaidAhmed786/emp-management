import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodayActivity.css";
import "../TimesheetCard/TimesheetCard.css";
import data from "../../../../data.json";
function TodayActivity() {
  const TodayActivityData = data.TodayActivityData;
  return (
    <Card className="TimesheetCard bg-white  border border-gary border-1">
      <Card.Body className="card-body">
        <h3 className="card-title text-dark">Today Activity</h3>
        {TodayActivityData.map((data, index) => (
          <div key={data} className="text-afterline-rapo">
            <p className="text-dark">{data.Text}</p>
            <p className="text-afterline-rapo-p text-muted">{data.Time}</p>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default TodayActivity;
