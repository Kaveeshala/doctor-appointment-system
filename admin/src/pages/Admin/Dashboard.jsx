import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/AppContext"

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const {slotDateFormat} = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])
  return dashData && (
    <div className="bg-white m-5">
      <div className="flex flex-wrap gap-3">
        <div className="">
          <p>{dashData.doctors}</p>
          <p>Doctors</p>
        </div>
        <div className="">
          <p>{dashData.appointments}</p>
          <p>Appointments</p>
        </div>
        <div className="">
          <p>{dashData.patients}</p>
          <p>Patients</p>
        </div>
      </div>

      <div className="">
        <div className="">
          <p>Latest Bookings</p>
        </div>
        <div className="pt-4 border border-top-0">
          {
            dashData.latestAppointments.map((item, index) => (
              <div key={index}>
                <img src={item.doctorId.image} />
                <div>
                  <p>{item.docData.name}</p>
                  <p>{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled
                  ? <p className="text-red-500 text-xs font-medium">Cancelled</p>
                  : <img onClick={() => cancelAppointment(item._id)} className="w-10 cursor-pointer" src={cancel_button} alt="cancel" />

                }
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Dashboard