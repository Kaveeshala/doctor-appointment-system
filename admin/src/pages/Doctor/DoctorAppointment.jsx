import { useEffect, useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import cancel_button from '../../assets/cancel-button.svg'
import tick_button from '../../assets/tick-button.svg'

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-bold text-slate-800 tracking-tight'>All Appointments</p>

      <div className='bg-white border border-slate-200/80 rounded-2xl text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto shadow-xs'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center gap-1 py-3.5 px-6 border-b border-slate-200/80 font-semibold text-slate-600 bg-slate-50/70 sticky top-0 z-10'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment Status</p>
          <p>Age</p>
          <p>Appointment Date & Time</p>
          <p>Fee</p>
          <p>Actions</p>
        </div>

        {appointments && appointments.length > 0 ? (
          appointments.reverse().map((item, index) => (
            <div
              key={item._id || index}
              className='flex flex-wrap justify-between max-sm:gap-3 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center text-slate-600 py-3.5 px-6 border-b border-slate-100 hover:bg-slate-50/80 transition-colors text-sm'
            >
              <p className='max-sm:hidden font-medium text-slate-400'>{index + 1}</p>

              <div className='flex items-center gap-3'>
                <img
                  className='w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 bg-slate-50'
                  src={item.userData?.image}
                  alt={item.userData?.name || 'Patient'}
                />
                <p className='font-medium text-slate-800'>{item.userData?.name}</p>
              </div>

              <div>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    item.payment
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-amber-200 bg-amber-50 text-amber-700'
                  }`}
                >
                  {item.payment ? 'Online' : 'CASH'}
                </span>
              </div>

              <p className='max-sm:hidden text-slate-600'>{calculateAge(item.userData?.dob)}</p>

              <p className='text-slate-600 font-medium'>
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              <p className='font-semibold text-slate-800'>
                {currency} {item.amount}
              </p>

              <div>
                {item.cancelled ? (
                  <p className='text-rose-500 text-xs font-semibold'>Cancelled</p>
                ) : item.isCompleted ? (
                  <p className='text-emerald-500 text-xs font-semibold'>Completed</p>
                ) : (
                  <div className='flex items-center gap-2'>
                    <img
                      className='w-10 cursor-pointer hover:opacity-80 transition-opacity'
                      src={cancel_button}
                      alt="cancel"
                      onClick={() => cancelAppointment(item._id)}
                    />
                    <img
                      className='w-10 cursor-pointer hover:opacity-80 transition-opacity'
                      src={tick_button}
                      alt="complete"
                      onClick={() => completeAppointment(item._id)}
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className='p-12 text-center text-slate-400 text-sm'>
            No appointments booked yet.
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorAppointment