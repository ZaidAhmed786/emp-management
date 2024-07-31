import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./ProfilePopUp.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import PopUpFirstForm from "../../FormsPopUp/PopUpFirstForm/PopUpFirstForm";
const ProfilePopUp = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered  modal-lg">
          <PopUpFirstForm />
        </div>
      </div>
    </>
  );
});

export default ProfilePopUp;
