import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./FamilyPopUp.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import PopUpFormFI from "../../FormsPopUp/PopUpFormFI/PopUpFormFI";

const FamilyPopUp = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#familyModal"
      ></button>

      <div
        className="modal fade"
        id="familyModal"
        tabIndex="-1"
        aria-labelledby="familyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <PopUpFormFI />
        </div>
      </div>
    </>
  );
});

export default FamilyPopUp;
