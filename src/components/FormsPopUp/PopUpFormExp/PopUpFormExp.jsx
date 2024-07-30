import React from "react";
import AddEmployeePopUpInputText from "../../AddEmployeePopUpInputText/AddEmployeePopUpInputText";
import data from "../../../data.json";
import PopUpInput from "../PopUpInput/PopUpInput";

function PopUpFormExp(props) {
  const ExpPopUpData = data.ExpPopUpData;

  return (
    <>
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
          <h5 className="modal-title text-center" id="exampleModalLabel">
            Experience Informations
          </h5>
        </div>
        <div className="modal-body mx-4 mt-4 pt-2">
          <form>
            <div className="modal-body-first-section border border-dark border-1 p-4 px-0">
              <div className="eduction-info-heading-icon-rapo d-flex justify-content-between pt-0 pb-0 p-4">
                <div className="eduction-info-heading ">
                  <h3>Experience Informations</h3>
                </div>
                <div className="eduction-info-icon">
                  <a href="#">{/* <RiDeleteBin6Line /> */}</a>
                </div>
              </div>

              <div className="modal-body-first-section p-4">
                <div className="col">
                  {ExpPopUpData.map((item, index) => (
                    <PopUpInput key={index} data={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className=" mt-5 d-flex justify-content-center">
            {props.children}
            <button type="button" class="btn submit-btn text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpFormExp;
