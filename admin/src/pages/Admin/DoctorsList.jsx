import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="space-y-6">
      <div className="text-xl font-bold text-slate-900 tracking-tight">All Doctors</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors && doctors.length > 0 ? (
          doctors.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="bg-indigo-50/60 overflow-hidden relative aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt={item.name}
                />
                <span
                  className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-medium shadow-xs backdrop-blur-md ${
                    item.available
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-rose-500/90 text-white'
                  }`}
                >
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-800 text-base truncate group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.speciality}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-600 font-medium">
                    <input
                      type="checkbox"
                      checked={item.available}
                      onChange={() => changeAvailability && changeAvailability(item._id)}
                      className="w-4 h-4 accent-primary rounded cursor-pointer"
                    />
                    <span>Available</span>
                  </label>
                  <span className="text-xs font-semibold text-slate-700">
                    ${item.fees}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl border border-slate-200/80 p-12 text-center text-slate-500 text-sm">
            No doctors found.
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorsList