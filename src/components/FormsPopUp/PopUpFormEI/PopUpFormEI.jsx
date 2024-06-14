import React from "react";

const PopUpFormEI = () => {
  return (
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
          Education Informations
        </h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="modal-body-first-section border border-dark border-1 p-4">
            <div className="eduction-info-heading-icon-rapo d-flex justify-content-between p-4">
              <div className="eduction-info-heading ">
                <h3>Education Informations</h3>
              </div>
              <div className="eduction-info-icon">
                <a href="#">
                  <RiDeleteBin6Line />
                </a>
              </div>
            </div>

            <div className="popup-inputs-label-rapo">
              <label className="pop-form-label" htmlFor="">
                Institution
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Subject
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Computer Science"
              />
            </div>

            <div className="popup-inputs-label-rapo mt-2">
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Select Date"
              />
              <div className="eduction-info-calender-icon">
                <a href="#">
                  <FaCalendarAlt />
                </a>
              </div>
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Select Date"
              />
              <div className="eduction-info-calender-icon">
                <a href="#">
                  <FaCalendarAlt />
                </a>
              </div>
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Degree
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Grade
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
          </div>
          <div className="modal-body-first-section border border-dark border-1 mt-5 p-4">
            <div className="eduction-info-heading-icon-rapo d-flex justify-content-between p-4">
              <div className="eduction-info-heading ">
                <h3>Education Informations</h3>
              </div>
              <div className="eduction-info-icon">
                <a href="#">
                  <RiDeleteBin6Line />
                </a>
              </div>
            </div>

            <div className="popup-inputs-label-rapo">
              <label className="pop-form-label" htmlFor="">
                Institution
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Subject
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Computer Science"
              />
            </div>

            <div className="popup-inputs-label-rapo mt-2">
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Select Date"
              />
              <div className="eduction-info-calender-icon">
                <a href="#">
                  <FaCalendarAlt />
                </a>
              </div>
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder="Select Date"
              />
              <div className="eduction-info-calender-icon">
                <a href="#">
                  <FaCalendarAlt />
                </a>
              </div>
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Degree
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <label className="pop-form-label" htmlFor="">
                Grade
              </label>
              <input
                type="text"
                className=" form-control pop-up-input text-dark"
                id="recipient-name"
                placeholder=""
              />
            </div>
            <div className="popup-inputs-label-rapo mt-2">
              <div className="txt-icon-rapo d-flex ms-3 gap-1 ">
                <a href="#">
                  <FaPlusCircle />
                </a>
                <p> Add more</p>
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
  );
};

export default PopUpFormEI;
