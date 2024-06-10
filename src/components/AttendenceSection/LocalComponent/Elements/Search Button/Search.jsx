import React from "react";

function Search({ onClick }) {
  return (
    <div className="w-100">
      <div className="w-100">
        <button
          className="w-100"
          style={{
            height: "42px",
            color: "white",
            backgroundColor: "#55CE63",
            fontFamily: "poppins",
            fontSize: "12px",
            border: "#55CE63",
            borderRadius: "3px",
          }}
          type="button"
          onClick={onClick}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Search;
