import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./PopUp.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const PopUp = React.forwardRef((props, ref,) => {
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
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          {props.children}
        </div>
      </div>
    </>
  );
});

export default PopUp;
