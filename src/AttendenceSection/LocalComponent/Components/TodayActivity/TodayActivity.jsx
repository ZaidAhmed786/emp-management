import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodayActivity.css";
import "../TimesheetCard/TimesheetCard.css";
import { TodayActivityData } from "../../Constants";
function TodayActivity() {
  return (
    <Card className="TimesheetCard bg-white">
      <Card.Body className="card-body">
        <h3 className="card-title text-dark">Today Activity</h3>
        {TodayActivityData.map((item, index) => (
          <div key={item} className="text-afterline-rapo">
            <p className="text-dark">{item.Text}</p>
            <p className="text-afterline-rapo-p text-muted">{item.Time}</p>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default TodayActivity;
