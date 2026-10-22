import { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";

const App = () => {

  const {aToken} = useContext(AdminContext)
  return aToken ? (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  ): (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Login />
    </>

  );
}

export default App;
