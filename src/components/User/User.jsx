import React from "react";
import "./User.css";
import PopUp from "../PopUp/PopUp";
import AddUserPopUp from "../AddUserPopUp/AddUserPopUp";
import SearchUser from "../SearchUser/SearchUser";
import UsersTable from "../UsersTable/UsersTable";

function User() {
  return (
    <div className="mt-4 px-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="bg-white">
          <p className="user-heading font-medium mb-1">Users</p>
          <p className="d-sm-flex d-none align-items-center mb-0">
            <a href="#" className="anchor-link">
              Dashboard
            </a>
            <p className="ms-2 mb-0 anchor-link-2">/</p>
            <p className="ms-2 mb-0 user-text">Users</p>
          </p>
        </div>
        <div>
          <AddUserPopUp />
        </div>
      </div>
      <div className="mt-3 pt-2">
        <SearchUser />
      </div>
      <div className="mt-4">
        <UsersTable />
      </div>
    </div>
  );
}

export default User;
