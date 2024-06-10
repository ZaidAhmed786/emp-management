import React from "react";
import { NavLink } from "react-bootstrap";

function PageDetails() {
  return (
    <div>
      <div>
        <div>
          <p
            class="fs-4 fw-semibold mb-2"
            style={{ fontFamily: "poppins", color: "#333333" }}
          >
            Attendance
          </p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "12.5rem" }}
        >
          <NavLink
            to=""
            className="fs-6 fw-normal"
            style={{ fontFamily: "poppins", color: "#333333" }}
          >
            Dashboard /
          </NavLink>
          <p
            className="fs-6 fw-normal"
            style={{ fontFamily: "poppins", color: "#6c757d" }}
          >
            Attendance
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
