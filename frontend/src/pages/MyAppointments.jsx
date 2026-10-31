import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Calendar, Clock, MapPin, CheckCircle2, CreditCard, XCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {

      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);

      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  const cancelAppointments = async (appointmentId) => {
   try {
    //console.log(appointmentId);

    const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId},{headers:{token}})

    if (data.success) {
      toast.success(data.message)
      getUserAppointments()
      getDoctorsData()
      
    }else {
      toast.error(data.message)
    }
    
    
   } catch (error) {
     console.log(error);
      toast.error(error.message)
    
   }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()

    }

  }, [token])

  const [notification, setNotification] = useState('')

  const handlePay = (id, docName) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt._id === id || apt.id === id ? { ...apt, isPaid: true, payment: true } : apt))
    )
    setNotification(`Payment successful for appointment with ${docName}!`)
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
          <CheckCircle2 className='w-5 h-5 shrink-0 text-med-accent' />
          <span>{notification}</span>
        </div>
      )}

      {/* Appointments List */}
      <div className='flex flex-col gap-6'>
        {appointments.length === 0 ? (
          <div className='text-center py-12 bg-med-card/20 border border-white/10 rounded-2xl'>
            <Calendar className='w-12 h-12 text-gray-500 mx-auto mb-3' />
            <p className='text-gray-300 font-medium'>No appointments booked yet.</p>
            <p className='text-gray-500 text-xs mt-1'>Book your first appointment with any doctor to see it here.</p>
          </div>
        ) : (
          appointments.map((item) => {
            const docData = item.docData || {}
            const isCancelled = item.cancelled || item.cancle || item.cancel || item.isCancelled
            const isPaid = item.payment || item.isPaid

            return (
              <div
                key={item._id || item.id}
                className={`bg-med-card/30 border ${isCancelled
                  ? 'border-red-500/20 opacity-70'
                  : 'border-white/10 hover:border-white/20'
                  } rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-sm transition-all flex flex-col md:flex-row items-center justify-between gap-6`}
              >
                {/* Doctor Details (Image + Info) */}
                <div className='flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full md:w-auto flex-1'>
                  {/* Doctor Avatar */}
                  <div className='w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden bg-med-dark/60 border border-white/10 flex-shrink-0 shadow-md'>
                    {docData.image ? (
                      <img
                        src={docData.image}
                        alt={docData.name || 'Doctor'}
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
                        {docData.name}
                        {isCancelled && (
                          <span className='text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-medium'>
                            Cancelled
                          </span>
                        )}
                        {isPaid && !isCancelled && (
                          <span className='text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium'>
                            Paid
                          </span>
                        )}
                      </h3>
                      <p className='text-med-accent text-xs sm:text-sm font-medium capitalize mt-0.5'>
                        {docData.speciality}
                      </p>
                    </div>

                    {/* Address */}
                    <div className='text-xs text-gray-300 flex flex-col gap-0.5 mt-1'>
                      <span className='font-semibold text-gray-400 flex items-center justify-center sm:justify-start gap-1'>
                        <MapPin className='w-3.5 h-3.5 text-med-accent' />
                        Address:
                      </span>
                      <span className='text-gray-300'>{docData.address?.line1 || (typeof docData.address === 'string' ? docData.address : '')}</span>
                      <span className='text-gray-400'>{docData.address?.line2 || ''}</span>
                    </div>

                    {/* Booked Date & Time */}
                    <div className='mt-2 inline-flex flex-wrap items-center justify-center sm:justify-start gap-3 bg-med-dark/50 border border-white/10 rounded-xl px-3.5 py-2 text-xs'>
                      <div className='flex items-center gap-1.5 text-gray-300'>
                        <Calendar className='w-3.5 h-3.5 text-med-accent' />
                        <span>
                          <strong className='text-white font-medium'>Date:</strong> {item.slotDate ? slotDateFormat(item.slotDate) : ''}
                        </span>
                      </div>
                      <span className='text-gray-600 hidden sm:inline'>|</span>
                      <div className='flex items-center gap-1.5 text-gray-300'>
                        <Clock className='w-3.5 h-3.5 text-med-accent' />
                        <span>
                          <strong className='text-white font-medium'>Time:</strong> {item.slotTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Pay Here & Cancel Appointment) */}
                <div className='flex flex-col sm:flex-row md:flex-col items-center gap-3 w-full md:w-48 justify-end pt-4 md:pt-0 border-t md:border-t-0 border-white/10'>
                  {/* Pay Here Button */}
                  {!isCancelled && (
                    <>
                      {isPaid ? (
                        <button
                          disabled
                          className='w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 cursor-default'
                        >
                          <CheckCircle2 className='w-4 h-4' />
                          <span>Paid</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePay(item._id || item.id, docData.name)}
                          className='w-full py-2.5 px-4 rounded-xl border border-med-accent text-med-accent hover:bg-med-accent hover:text-med-dark text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer'
                        >
                          <CreditCard className='w-4 h-4' />
                          <span>Pay Here</span>
                        </button>
                      )}
                    </>
                  )}

                  {/* Cancel Appointment Button */}
                  {isCancelled ? (
                    <button
                      disabled
                      className='w-full py-2.5 px-4 rounded-xl border border-gray-700 bg-white/5 text-gray-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 cursor-not-allowed'
                    >
                      <XCircle className='w-4 h-4' />
                      <span>Cancelled</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => cancelAppointments(item._id)}
                      className='w-full py-2.5 px-4 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer'
                    >
                      <XCircle className='w-4 h-4' />
                      <span>Cancel appointment</span>
                    </button>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default MyAppointments