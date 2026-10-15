import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Calendar, Clock, MapPin, CheckCircle2, CreditCard, XCircle, AlertCircle } from 'lucide-react'

const MyAppointments = () => {
  const { doctors, currencySymbol } = useContext(AppContext)

  // 3 sample booked appointments initialized with first 3 doctors
  const [appointments, setAppointments] = useState([
    {
      id: 'apt-1',
      docIndex: 0,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Church Road, London',
      },
      date: '25, Oct, 2026',
      time: '10:30 AM',
      isPaid: false,
      isCancelled: false,
    },
    {
      id: 'apt-2',
      docIndex: 1,
      address: {
        line1: '27th Cross, Avenue Park',
        line2: 'Bridge Street, Central District, London',
      },
      date: '28, Oct, 2026',
      time: '02:00 PM',
      isPaid: false,
      isCancelled: false,
    },
    {
      id: 'apt-3',
      docIndex: 2,
      address: {
        line1: '14th Floor, Medical Towers',
        line2: 'Sector 4, Kensington Square, London',
      },
      date: '02, Nov, 2026',
      time: '04:30 PM',
      isPaid: false,
      isCancelled: false,
    },
  ])

  const [notification, setNotification] = useState('')

  const handlePay = (id, docName) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, isPaid: true } : apt))
    )
    setNotification(`Payment successful for appointment with ${docName}!`)
    setTimeout(() => setNotification(''), 3500)
  }

  const handleCancel = (id, docName) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, isCancelled: true } : apt))
    )
    setNotification(`Appointment with ${docName} has been cancelled.`)
    setTimeout(() => setNotification(''), 3500)
  }

  return (
    <div className='py-8 sm:py-12 max-w-5xl mx-auto'>
      {/* Title */}
      <div className='mb-8'>
        <h1 className='text-2xl sm:text-3xl font-bold text-white'>
          My <span className='text-med-accent'>Appointments</span>
        </h1>
        <p className='text-gray-400 text-sm mt-1'>
          Manage your upcoming medical consultations, check-ins, and payment records.
        </p>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className='mb-6 p-4 rounded-xl bg-med-card/80 border border-med-accent/40 text-white flex items-center gap-3 text-sm shadow-lg backdrop-blur-md animate-fade-in'>
          <CheckCircle2 className='w-5 h-5 flex-shrink-0 text-med-accent' />
          <span>{notification}</span>
        </div>
      )}

      {/* Appointments List (3 doctors) */}
      <div className='flex flex-col gap-6'>
        {appointments.map((item) => {
          const doctor = doctors[item.docIndex] || {}
          return (
            <div
              key={item.id}
              className={`bg-med-card/30 border ${
                item.isCancelled
                  ? 'border-red-500/20 opacity-70'
                  : 'border-white/10 hover:border-white/20'
              } rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-sm transition-all flex flex-col md:flex-row items-center justify-between gap-6`}
            >
              {/* Doctor Details (Image + Info) */}
              <div className='flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full md:w-auto flex-1'>
                {/* Doctor Avatar */}
                <div className='w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden bg-med-dark/60 border border-white/10 flex-shrink-0 shadow-md'>
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className='w-full h-full object-cover object-top'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-gray-500 text-xs'>
                      No Photo
                    </div>
                  )}
                </div>

                {/* Doctor Details Text */}
                <div className='flex flex-col gap-2 text-center sm:text-left'>
                  <div>
                    <h3 className='text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2'>
                      {doctor.name}
                      {item.isCancelled && (
                        <span className='text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-medium'>
                          Cancelled
                        </span>
                      )}
                      {item.isPaid && !item.isCancelled && (
                        <span className='text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium'>
                          Paid
                        </span>
                      )}
                    </h3>
                    <p className='text-med-accent text-xs sm:text-sm font-medium capitalize mt-0.5'>
                      {doctor.speciality}
                    </p>
                  </div>

                  {/* Address */}
                  <div className='text-xs text-gray-300 flex flex-col gap-0.5 mt-1'>
                    <span className='font-semibold text-gray-400 flex items-center justify-center sm:justify-start gap-1'>
                      <MapPin className='w-3.5 h-3.5 text-med-accent' />
                      Address:
                    </span>
                    <span className='text-gray-300'>{item.address.line1}</span>
                    <span className='text-gray-400'>{item.address.line2}</span>
                  </div>

                  {/* Booked Date & Time */}
                  <div className='mt-2 inline-flex flex-wrap items-center justify-center sm:justify-start gap-3 bg-med-dark/50 border border-white/10 rounded-xl px-3.5 py-2 text-xs'>
                    <div className='flex items-center gap-1.5 text-gray-300'>
                      <Calendar className='w-3.5 h-3.5 text-med-accent' />
                      <span>
                        <strong className='text-white font-medium'>Date:</strong> {item.date}
                      </span>
                    </div>
                    <span className='text-gray-600 hidden sm:inline'>|</span>
                    <div className='flex items-center gap-1.5 text-gray-300'>
                      <Clock className='w-3.5 h-3.5 text-med-accent' />
                      <span>
                        <strong className='text-white font-medium'>Time:</strong> {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Pay Here & Cancel Appointment) */}
              <div className='flex flex-row md:flex-col items-center gap-3 w-full md:w-48 justify-end pt-4 md:pt-0 border-t md:border-t-0 border-white/10'>
                {/* Pay Here Button */}
                {!item.isCancelled && (
                  <>
                    {item.isPaid ? (
                      <button
                        disabled
                        className='w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 cursor-default'
                      >
                        <CheckCircle2 className='w-4 h-4' />
                        <span>Paid</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePay(item.id, doctor.name)}
                        className='w-full py-2.5 px-4 rounded-xl border border-med-accent text-med-accent hover:bg-med-accent hover:text-med-dark text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer'
                      >
                        <CreditCard className='w-4 h-4' />
                        <span>Pay Here</span>
                      </button>
                    )}
                  </>
                )}

                {/* Cancel Appointment Button */}
                {item.isCancelled ? (
                  <button
                    disabled
                    className='w-full py-2.5 px-4 rounded-xl border border-gray-700 bg-white/5 text-gray-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 cursor-not-allowed'
                  >
                    <XCircle className='w-4 h-4' />
                    <span>Cancelled</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleCancel(item.id, doctor.name)}
                    className='w-full py-2.5 px-4 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer'
                  >
                    <XCircle className='w-4 h-4' />
                    <span>Cancel appointment</span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyAppointments