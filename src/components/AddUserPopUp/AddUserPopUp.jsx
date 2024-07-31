import React from "react";
import "./AddUserPopUp.css";
import AddUserPopUpInputText from "../AddUserPopUpInputText/AddUserPopUpInputText";
import UserRoleTable from "../userRoleTable/UserRoleTable";
import data from "../../data.json";

const AddUserPopUp = () => {
  const AddUserPopUpData = data.AddUserPopUpData;
  return (
    <>
      <button
        type="button"
        className="add-btn fw-semibold"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Add User
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
            <div className="modal-header">
              <h3 className="modal-title text-center" id="exampleModalLabel">
                Add User
              </h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-body-first-section p-4">
                  <div className="row">
                    {AddUserPopUpData.map((item, index) => (
                      <AddUserPopUpInputText
                        key={index}
                        data={item}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
                <UserRoleTable />
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
      </div>
    </>
  );
};

export default AddUserPopUp;
