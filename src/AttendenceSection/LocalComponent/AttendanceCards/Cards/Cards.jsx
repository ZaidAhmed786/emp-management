import React from "react";
import TimesheetCard from "../../TimesheetCard/TimesheetCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StatisticsCard from "../../StatisticsCard/StatisticsCard";
import TodayActivity from "../../TodayActivity/TodayActivity";
const Cards = () => {
  return (
    <>
      <Container className="bg-white">
        <Row>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <TimesheetCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
            <StatisticsCard />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5">
            <TodayActivity />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
