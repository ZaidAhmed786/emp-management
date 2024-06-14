import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardProfile.css";
import ProfileFristSection from "../localComponents/ProfileFristSection//ProfileFristSection";
import TabNav from "../../TabNav/TabNav";
import AddEmployeePopUp from "../../AddEmployeePopUp/AddEmployeePopUp";
import UserRoleTable from "../../userRoleTable/UserRoleTable";
import PopUp from "../../PopUp/PopUp";
const DashboardProfile = () => {
  return (
    <>
     <div >
     <section className="profile-section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="Profile-haeding-text-rapo d-grid align-items-center ">
                <div className="profile-heading text-dark ">
                  <h3>Profile</h3>
                </div>
                <div className="profile-txt d-flex ">
                  <a href="#" className="text-dark">
                    Dashboard
                  </a>
                  <span className="text-dark px-2">/</span>
                  <p className="fw-6">Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProfileFristSection />
      <TabNav />
      {/* <UserRoleTable/> */}
      {/* <AddEmployeePopUp/> */}
     </div>
    </>
  );
};

export default DashboardProfile;
