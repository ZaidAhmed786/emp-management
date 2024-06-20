import React, { useRef } from "react";
import BankInformationCard from "../Profile/localComponents/BankInformationCard/BankInformationCard";
import EducationInformationsCard from "../Profile/localComponents/EducationInformationsCard/EducationInformationsCard";
import EmergencyContactCard from "../Profile/localComponents/EmergencyContactCard/EmergencyContactCard";
import ExperienceCard from "../Profile/localComponents/ExperienceCard/ExperienceCard";
import FamilyInformationsCard from "../Profile/localComponents/FamilyInformationsCard/FamilyInformationsCard";
import InfoBankStatutory from "../Profile/localComponents//InfoBankStatutory/InfoBankStatutory";
import PersonalInformationCard from "../Profile/localComponents/PersonalInformationCard/PersonalInformationCard";
import "./TabNav.css";
import PopUp from "../PopUps/ProfilePopUp/ProfilePopUp";
function TabNav() {
  const modalButtonRef = useRef(null);

  const handleIconClick = () => {
    console.log("clicked");
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
  };
  return (
    <>
      <section className="tab-section px-3">
        <div className="container tab-container">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link "
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Profile"
                type="button"
                role="tab"
                aria-controls="nav-Profile"
                aria-selected="true"
              >
                Profile
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Projects"
                type="button"
                role="tab"
                aria-controls="nav-Projects"
                aria-selected="false"
              >
                Projects
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Bank"
                type="button"
                role="tab"
                aria-controls="nav-Bank"
                aria-selected="false"
              >
                Bank & Statutory
                <span className="tab-link-span">(Admin Only)</span>
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-Assets"
                type="button"
                role="tab"
                aria-controls="nav-Assets"
                aria-selected="false"
              >
                Assets
              </button>
            </div>
          </nav>
        </div>
        <div className="container profile-tab-container mt-5 px-0">
          <div className="tab-content my-3" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-Profile"
              role="tabpanel"
              aria-labelledby="nav-Profile-tab"
            >
              <div className="row">
                <div className="col-lg-6 ">
                  <PersonalInformationCard />
                </div>
                <div className="col-lg-6">
                  <EmergencyContactCard />
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-6 ">
                  <BankInformationCard />
                </div>
                <div className="col-lg-6">
                  <FamilyInformationsCard />
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-6 mb-5">
                  <EducationInformationsCard />
                </div>
                <div className="col-lg-6 mb-5">
                  <ExperienceCard>
                    <div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Reiciendis tempora saepe odio placeat, modi velit repellat
                      illo tempore veritatis? Provident.
                    </div>
                  </ExperienceCard>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Projects"
              role="tabpanel"
              aria-labelledby="nav-Projects-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="nav-Bank"
              role="tabpanel"
              aria-labelledby="nav-Bank-tab"
            >
              <InfoBankStatutory />
            </div>
            <div
              className="tab-pane fade"
              id="nav-Assets"
              role="tabpanel"
              aria-labelledby="nav-Assets-tab"
            >
              ...
            </div>
          </div>
        </div>
      </section>
      <PopUp ref={modalButtonRef} />
    </>
  );
}

export default TabNav;
