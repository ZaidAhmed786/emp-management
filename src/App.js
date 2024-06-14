import ManageRoutes from "./pages/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersTable from "./components/UsersTable/UsersTable";
import Employee from "./components/Dashboard/Employee/Employee";
import DashboardProfile from "./components/Profile/DashboardProfile/DashboardProfile";
// import AddEmployeePopUp from "./components/AddEmployeePopUp/AddEmployeePopUp";
// import Attendance from "";
function App() {
  return (
    <>
      {/* <ToastContainer autoClose={3000} />
      <ManageRoutes /> */}
      <DashboardProfile />
      {/* <Attendance /> */}
      {/* <AddEmployeePopUp /> */}
      {/* <Employee /> */}
    </>
  );
}

export default App;
