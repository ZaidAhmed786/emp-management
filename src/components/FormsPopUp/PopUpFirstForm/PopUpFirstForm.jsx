import React, { useState } from "react";
import "../../AddEmployeePopUp/AddEmployeePopUp.css";
import FPdata from "../../../data.json";
import PopUpFirstFormInputs from "./PopUpFirstFormInputs";

const PopUpFirstForm = () => {
  const PopUpFirstForm = FPdata.PopUpFirstForm;

  const [profileImage, setProfileImage] = useState(
    "https://smarthr.dreamstechnologies.com/tailwind/template/src/images/profiles/avatar-02.jpg"
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-header d-grid justify-content-center">
            <div className="modal-title text-center" id="exampleModalLabel">
              <h3>Profile Information</h3>
              <div className="popuplogo d-grid justify-content-center my-3">
                <div className="imageButtonMain">
                  <button
                    onClick={() => document.getElementById("fileInput").click()}
                    className="imageEditButton"
                  >
                    edit
                  </button>
                </div>
                <img
                  id="profileImage"
                  className="img-fluid rounded-pill"
                  src={profileImage}
                  alt="Profile"
                />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div className="modal-body">
            <form>
              <div className="modal-body-first-section p-4">
                <div className="row">
                  {PopUpFirstForm.map((item, index) => (
                    <PopUpFirstFormInputs
                      key={index}
                      FPdata={item}
                      index={index}
                    />
                  ))}
                </div>
              </div>
              {/* <UserRoleTable /> */}
            </form>
          </div>
          <div className="modal-footer">
            <div className="mt-5 d-flex justify-content-center">
              <button type="button" className="btn submit-btn text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpFirstForm;
