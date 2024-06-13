import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./../hooks/utils/ProtectedRoute";
import Home from "./home/Home";
import Login from "./auth/login/Login";
import Layout from "./layout/Layout";
import Profile from "../components/Profile/DashboardProfile/DashboardProfile";
import AdminDashboard from "../components/Dashboard/AdminDashboard/Components/AdminInfoSection/AdminInfoSection";
import AttendancePage from "../components/AttendenceSection/AttendancePage/AttendancePage";
<<<<<<< Updated upstream
=======
// import AttendancePage from '../AttendenceSection/AttendancePage/AttendancePage.jsx'
>>>>>>> Stashed changes
import { useSelector } from "react-redux";
// import { selectUserRole } from "../store/slices/AuthSlice.jsx";
const ManageRoutes = () => {
  // const userRole = useSelector(selectUserRole);
  const selectUserRole = (state) => state.auth.userInfo.role;
  const userRole = useSelector((state) => state.auth.userInfo.role);
  // console.log('role from routes file', userRole);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance-page"
            element={
              <ProtectedRoute>
                <AttendancePage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default ManageRoutes;
