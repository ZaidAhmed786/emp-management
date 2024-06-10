import React from "react";
import "./AdminInfoSection.css";
import data  from "../../../../../data.json";
import ChartsSection from "../ChartsSection/ChartsSection";
import RatingSection from "../RatingSection/RatingSection";
import AdminDashboardCards from "../AdminDashboardCards/AdminDashboardCards";
import { FaCubes,FaUser,FaDollarSign } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const AdminInfoSection = () => {
  const { AdminInfoSectionData } = data;
  const icons = [
    <FaCubes className="icon-cube" />,
    <FaUser className="icon-cube" />,
    <FaDollarSign className="icon-cube" />,
    <IoDiamondOutline className="icon-cube" />,
  ];
  return (
    <>
      <section className="bg-light AdminInfoSection">
        <div className="container">
          <div className="row" style={{paddingTop: '20px'}}>
            {AdminInfoSectionData.map((item, index) => (
              <div key={item} className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="admininfo-icon-txt-main-rapo bg-white p-4 d-lg-flex d-md-grid d-sm-grid justify-content-lg-between justify-content-md-center justify-content-sm-center gap-md-3 mb-md-5 gap-sm-3 mb-sm-5 gap-lg-0 mb-lg-0 align-items-lg-center align-items-md-center align-items-sm-center">
                  <div className="icon-two bg-white">
                    <i>{icons[index]}</i>
                  </div>
                  <div className="txt-rapo d-grid align-items-center text-lg-end text-md-center">
                    <h3 className="text-dark">{item.heading}</h3>
                    <p className="text-dark">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ChartsSection />
      <RatingSection />
      <AdminDashboardCards />
    </>
  );
};

export default AdminInfoSection;
