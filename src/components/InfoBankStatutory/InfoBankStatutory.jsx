import React from "react";
import "../InfoBankStatutory/InfoBankStatutory.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import PfInfoSection from "../PfInfoSection/PfInfoSection";
import ESIInformationSection from "../ESIInformationSection/ESIInformationSection";

const InfoBankStatutory = () => {
  return (
    <div className="container p-4 infobank-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading mb-5">
            <h3>Basic Salary Information</h3>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4 d-grid">
          <h6 className="label">Salary basis</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select salary basis type</option>
              <option value="1">Hourly</option>
              <option value="2">Daily</option>
              <option value="3">Weekly</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 d-grid">
          <h6 className="label">
            Salary amount <span className="label-span">per month</span>
          </h6>
          <div class="input-group ">
            <span class="input-group-text" id="basic-addon1">
              $
            </span>
            <input
              type="text"
              class="form-control "
              placeholder="0.00"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-lg-4 d-grid">
          <h6 className="label">Payment type</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select payment type</option>
              <option value="1">Bank transfer</option>
              <option value="2">Check</option>
              <option value="3">cash</option>
            </select>
          </div>
        </div>
      </div>
      <hr class=" underline my-4 border-dark opacity-25 "></hr>
      <PfInfoSection />
      <hr class=" underline my-4 border-dark opacity-25 "></hr>
      <ESIInformationSection />
      <div className=" mt-5 d-flex justify-content-center">
        <button type="button" class="btn submit-btn text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InfoBankStatutory;
