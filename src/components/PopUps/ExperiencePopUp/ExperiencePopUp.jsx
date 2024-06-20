import React from "react";
import "./ExperiencePopUp.css";
import PopUpFormExp from "../../FormsPopUp/PopUpFormExp/PopUpFormExp";

const ExperiencePopUp = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#experienceModal"
      ></button>

      <div
        className="modal fade"
        id="experienceModal"
        tabIndex="-1"
        aria-labelledby="experienceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <PopUpFormExp />
        </div>
      </div>
    </>
  );
});

export default ExperiencePopUp;
