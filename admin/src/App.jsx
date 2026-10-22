import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div className="flex flex-1 items-stretch">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-dashbaord" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointements" element={<AllAppointments />} />
            <Route path="/all-appointments" element={<AllAppointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorsList />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Login />
    </>
  );
};

export default App;
