import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const DropdownMenu = () => {
  return (
    <div className="dropdown d-flex align-items-center">
      <button
        className="btn  text-white icon-button"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <HiOutlineDotsVertical />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item">
          <MdOutlineEdit className="dropdown-icon" /> Edit
        </li>
        <li className="dropdown-item">
          <MdDeleteOutline className="dropdown-icon" /> Delete
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
