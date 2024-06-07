import React from "react";
import "../InfoBankStatutory/InfoBankStatutory";
const ESIInformationSection = () => {
  return (
    <>
      <div className="heading mb-3">
        <h3>ESI Information</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 ">
          <h6 className="label text-white">ESI contribution</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select bg-white"
              id="inputGroupSelect02"
            >
              <option className="text-muted"  selected>Select ESI contribution</option>
              <option className="text-muted" value="1">Yes</option>
              <option className="text-muted"  value="2">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label text-dark">
            ESI No <span className="label-span-two">*</span>
          </h6>

          <div className="input-group ">
            <select
              className="form-select custom-select bg-white"
              id="inputGroupSelect02"
            >
              <option className="text-muted" selected>Select ESI contribution</option>
              <option className="text-muted"  value="1">Yes</option>
              <option className="text-muted" value="2">No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4 ">
          <h6 className="label text-dark">Employee ESI rate</h6>

          <div className="input-group ">
            <select
              className="form-select custom-select bg-white"
              id="inputGroupSelect02"
            >
              <option className="text-muted"  selected>Select ESI contribution</option>
              <option className="text-muted" value="1">Yes</option>
              <option className="text-muted" value="2">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label text-dark">
            Additional rate <span className="label-span-two">*</span>
          </h6>

          <div className="input-group ">
            <select
              className="form-select custom-select bg-white"
              id="inputGroupSelect02"
            >
              <option className="text-muted"  selected>Select additional rate</option>
              <option className="text-muted" value="1">0%</option>
              <option className="text-muted" value="2">1%</option>
              <option className="text-muted" value="2">2%</option>
              <option className="text-muted" value="2">3%</option>
              <option className="text-muted" value="2">4%</option>
              <option className="text-muted" value="2">5%</option>
              <option className="text-muted" value="2">6%</option>
              <option className="text-muted" value="2">7%</option>
              <option className="text-muted" value="2">8%</option>
              <option className="text-muted" value="2">9%</option>
              <option className="text-muted" value="2">10%</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 ">
          <h6 className="label text-dark">Total rate</h6>

          <div className="input-group ">
            <input type="text" class="form-control bg-white" placeholder="11%"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESIInformationSection;
