import ManageRoutes from "./pages/Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer autoClose={3000}/>
      <ManageRoutes />
    </>
  );
}

export default App;
