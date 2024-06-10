import ManageRoutes from "./pages/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Attendance from "";
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <ManageRoutes />
      {/* <DashboardProfile /> */}
      {/* <Attendance /> */}
    </>
  );
}

export default App;
