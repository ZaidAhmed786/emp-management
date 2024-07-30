import React from "react";
import "../../AddEmployeePopUp/AddEmployeePopUp.css";
import FPdata from "../../../data.json";
import PopUpFirstFormInputs from "./PopUpFirstFormInputs";

const PopUpFirstForm = () => {
  const PopUpFirstForm = FPdata.PopUpFirstForm;
  return (
    <>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
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
            <h3 className="modal-title text-center" id="exampleModalLabel">
              Profile Information
              <div className="popuplogo d-grid justify-content-center my-3">
                <img
                  typeof="file"
                  className="img-fluid rounded-pill"
                  src="https://smarthr.dreamstechnologies.com/tailwind/template/src/images/profiles/avatar-02.jpg"
                  alt=""
                />
              </div>
            </h3>
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
