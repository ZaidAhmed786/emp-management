import React from "react";

function PageDetails() {
  return (
    <div className="px-3 pt-4 bg-light">
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
          <a
            href="/"
            className="fs-6 fw-normal"
            style={{
              textDecoration: "none",
              fontFamily: "poppins",
              color: "#333333",
            }}
          >
            Dashboard /
          </a>
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
