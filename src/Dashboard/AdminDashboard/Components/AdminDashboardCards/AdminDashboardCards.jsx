import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AdminDashboardStatisticsCard from "../AdminDashboardStatisticsCard/AdminDashboardStatisticsCard";
import AdminDashboardTaskStatisticsCard from "../AdminDashboardTaskStatisticsCard/AdminDashboardTaskStatisticsCard";
import TodayAbsentCard from "../TodayAbsentCard/TodayAbsentCard";
const AdminDashboardCards = () => {
  return (
    <>
      <section className="bg-dark">
        <Container>
          <Row>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <AdminDashboardStatisticsCard />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
              <AdminDashboardTaskStatisticsCard />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5">
              <TodayAbsentCard />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminDashboardCards;
