import ManageRoutes from "./pages/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardProfile from "./components/DashboardProfile/DashboardProfile";
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <ManageRoutes />
      <DashboardProfile />
    </>
  );
}

export default App;
