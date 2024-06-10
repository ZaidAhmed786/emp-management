import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./AddEmployeePopUp.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import AddEmployeePopUpInputText from "../AddEmployeePopUpInputText/AddEmployeePopUpInputText";

const AddEmployeePopUp = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        AddEmployeePopUpButton
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-header">
              <h3 className="modal-title text-center" id="exampleModalLabel">
                Add Employee
              </h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-body-first-section p-4">
                  <div className="row">
                    <AddEmployeePopUpInputText />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className=" mt-5 d-flex justify-content-center">
                <button type="button" class="btn submit-btn text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployeePopUp;
