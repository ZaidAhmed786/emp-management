import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./../hooks/utils/ProtectedRoute";
import Home from "./home/Home";
import Login from "./auth/login/Login";
import Layout from "./layout/Layout";
import Profile from "../components/Profile/DashboardProfile/DashboardProfile";
import AdminDashboard from "../components/Dashboard/AdminDashboard/Components/AdminInfoSection/AdminInfoSection";
import AttendancePage from "../components/AttendenceSection/AttendancePage/AttendancePage";
import AttendanceAdmin from "../components/AttendenceSection/AttendancePage/AttendanceAdmin";
// import { useSelector } from "react-redux";
// import { selectUserRole } from "../store/slices/AuthSlice.jsx";
const ManageRoutes = () => {
  // const selectUserRole = (state) => state.auth.userInfo.role;
  // const userRole = useSelector((state) => state.auth.userInfo.role);
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
            path="/attendance-admin"
            element={
              <ProtectedRoute>
                <AttendanceAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance-employee"
            element={
              <ProtectedRoute>
                <AttendancePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-page"
            element={<ProtectedRoute>{/* <User /> */}</ProtectedRoute>}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default ManageRoutes;
