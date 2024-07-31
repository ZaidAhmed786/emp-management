import React from "react";
import "./EducationPopUp.css";
import PopUpFormEI from "../../FormsPopUp/PopUpFormEI/PopUpFormEI";

const EducationPopUp = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#educationModal"
      ></button>

      <div
        className="modal fade"
        id="educationModal"
        tabIndex="-1"
        aria-labelledby="educationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <PopUpFormEI />
        </div>
      </div>
    </>
  );
});

export default EducationPopUp;
