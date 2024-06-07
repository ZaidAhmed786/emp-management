import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardProfile.css";
import ProfileFristSection from "../ProfileFristSection/ProfileFristSection";
import TabNav from "../TabNav/TabNav";
const DashboardProfile = () => {
  return (
    <>
     <div >
     <section className="profile-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="Profile-haeding-text-rapo d-grid align-items-center">
                <div className="profile-heading">
                  <h3>Profile</h3>
                </div>
                <div className="profile-txt d-flex ">
                  <a href="#" className="">
                    Dashboard
                  </a>
                  <span className="text-white px-2">/</span>
                  <p className="fw-6">Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProfileFristSection />
      <TabNav />
     </div>
    </>
  );
};

export default DashboardProfile;
