import React from "react";
import "../../AddEmployeePopUp/AddEmployeePopUp.css";
import ECdata from "../../../data.json";
import PopUpECFormInputs from "./PopUpECInputsForm";

const PopUpECForm = () => {
  const PopUpECForm = ECdata.PopUpECForm;
  const PopUpECFormSecondData = ECdata.PopUpECFormSecondData;
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
            </h3>
          </div>
          <div className="modal-body">
            <form>
              <div className="modal-body-first-section border border-dark border-1 p-4">
                <h3 className="text-start text-dark ">
                  {(ECdata.section = "Primary")}
                </h3>
                <div className="row">
                  {PopUpECForm.map((item, index) => (
                    <PopUpECFormInputs
                      key={index}
                      ECdata={item}
                      index={index}
                    />
                  ))}
                </div>
              </div>
              <div className="modal-body-first-section border border-dark border-1 p-4">
                <h3 className="text-start text-dark "> Secondary Contact</h3>
                <div className="row">
                  {PopUpECFormSecondData.map((item, index) => (
                    <PopUpECFormInputs
                      key={index}
                      ECdata={item}
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

export default PopUpECForm;
