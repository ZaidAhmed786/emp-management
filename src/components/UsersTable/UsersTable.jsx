import React from "react";
import "./UsersTable.css";
import { FaSortDown, FaCaretUp } from "react-icons/fa";
import DropdownMenu from "../Profile/localComponents/DropdownMenu/DropdownMenu";
import data from "../../data.json";

const UsersTable = () => {
  const UsersTableData = data.UsersTable;

  const getRoleClassName = (role) => {
    switch (role) {
      case "Admin":
        return "role-admin";
      case "Employee":
        return "role-employee";
      case "Client":
        return "role-client";
      default:
        return "";
    }
  };
  const tableHeaders = [
    { label: "Name", key: "username" },
    { label: "Email", key: "useremail" },
    { label: "Company", key: "usercompany" },
    { label: "Created Date", key: "userdate" },
    { label: "Role", key: "userrole" },
    { label: "Action", key: "action" },
  ];

  return (
    <section className="bg-dark">
      <div className="container overflow-auto">
        <div className="row">
          <div className="col">
            <table className="table table-dark table-striped">
              <thead className="bg-black">
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th key={index} className="table-box-styling" scope="col">
                      {header.label}
                      <div className="buttons-rapo d-grid align-items-center g-0">
                        <a href="#" className="table-btn-three m-0 p-0">
                          <i>
                            <FaCaretUp />
                          </i>
                        </a>
                        <a href="#" className="table-btn-four m-0 p-0">
                          <i>
                            <FaSortDown />
                          </i>
                        </a>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {UsersTableData.map((user, index) => (
                  <tr key={index} className="my-5">
                    {tableHeaders.map((header, index) => (
                      <td key={index}>
                        {header.key === "username" ? (
                          <div className="user-image-name-main-rapo d-flex gap-4">
                            <div className="image">
                              <img
                                className="rounded-pill user-image"
                                src={user.image}
                                alt="user"
                              />
                            </div>
                            <div className="user-name d-grid">
                              <a href="#">{user.username}</a>
                              <span>{user.userprofession}</span>
                            </div>
                          </div>
                        ) : header.key === "action" ? (
                          <DropdownMenu actions={user.actions} />
                        ) : (
                          <h6
                            className={` ${
                              header.key === "userrole"
                                ? getRoleClassName(user[header.key])
                                : ""
                            }`}
                          >
                            {user[header.key]}
                          </h6>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersTable;
