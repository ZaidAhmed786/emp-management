import React from "react";
import "../InfoBankStatutory/InfoBankStatutory.css";
const ESIInformationSection = () => {
  return (
    <>
      <div className="heading mb-3">
        <h3>ESI Information</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 ">
          <h6 className="label">ESI contribution</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select ESI contribution</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label">
            ESI No <span className="label-span-two">*</span>
          </h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select ESI contribution</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4 ">
          <h6 className="label">Employee ESI rate</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select ESI contribution</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label">
            Additional rate <span className="label-span-two">*</span>
          </h6>

          <div className="input-group ">
            <select
              className="form-select custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Select additional rate</option>
              <option value="1">0%</option>
              <option value="2">1%</option>
              <option value="2">2%</option>
              <option value="2">3%</option>
              <option value="2">4%</option>
              <option value="2">5%</option>
              <option value="2">6%</option>
              <option value="2">7%</option>
              <option value="2">8%</option>
              <option value="2">9%</option>
              <option value="2">10%</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label">Total rate</h6>

          <div className="input-group ">
            <input type="text" class="form-control" placeholder="11%"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESIInformationSection;
