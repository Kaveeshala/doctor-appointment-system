import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const specialities = [
    { label: "General physician", value: "generalphysician" },
    { label: "Gynecology", value: "gynecology" },
    { label: "Dermatologist", value: "dermotologist" },
    { label: "Pediatrician", value: "pediatrician" },
    { label: "Neurologist", value: "neurologist" },
    { label: "Gastroenterologist", value: "gestroenterologist" },
  ];

  const applyFilter = () => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        setFilterDoc(
          doctors.filter(
            (doc) => doc.speciality?.toLowerCase() === speciality.toLowerCase()
          )
        );
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="py-8">
      <p className="text-gray-300 text-sm sm:text-base mb-6">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Speciality Filter Sidebar */}
        <div className="flex flex-wrap sm:flex-col gap-3 w-full sm:w-64 text-sm shrink-0">
          {specialities.map((item) => {
            const isActive =
              speciality && speciality.toLowerCase() === item.value.toLowerCase();
            return (
              <button
                key={item.value}
                onClick={() => {
                  if (isActive) {
                    navigate("/doctors");
                  } else {
                    navigate(`/doctors/${item.value}`);
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-med-accent text-med-dark font-semibold border-med-accent shadow-md"
                    : "bg-med-card/40 hover:bg-med-card text-gray-200 border-white/10 hover:border-white/20"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Doctors Grid */}
        <div className="w-full">
          {filterDoc.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8">
              {filterDoc.map((item) => (
                <div
                  key={item._id}
                  onClick={() => {
                    navigate(`/appointment/${item._id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-med-card/50 hover:bg-med-card border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col group"
                >
                  <div className="w-full h-56 overflow-hidden bg-med-dark/40 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.available ? "bg-emerald-400" : "bg-gray-400"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            item.available ? "text-emerald-400" : "text-gray-400"
                          }`}
                        >
                          {item.available ? "Available" : "Not Available"}
                        </span>
                      </div>
                      <p className="text-white font-semibold text-base group-hover:text-med-accent transition-colors">
                        {item.name}
                      </p>
                      <p className="text-gray-300 text-xs capitalize">
                        {item.speciality}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-med-card/20 rounded-2xl border border-white/10">
              <p className="text-gray-300 text-lg">
                No doctors found for this speciality.
              </p>
              <button
                onClick={() => navigate("/doctors")}
                className="mt-4 px-6 py-2 bg-med-accent text-med-dark rounded-full font-medium text-sm hover:bg-white transition-all cursor-pointer"
              >
                View All Doctors
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
