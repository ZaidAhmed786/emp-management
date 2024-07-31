import React from "react";
import PopUpECForm from "../../FormsPopUp/PopUpECForm/PopUpECForm";

const PersonalPopUp = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#personalModal"
      ></button>

      <div
        className="modal fade"
        id="personalModal"
        tabIndex="-1"
        aria-labelledby="personalModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="personalModalLabel">
                Edit Personal Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <PopUpECForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default PersonalPopUp;
