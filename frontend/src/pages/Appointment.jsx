import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { BadgeCheck } from 'lucide-react'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time for the day (9:00 PM)
      const endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting start hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })

        let date = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if (isSlotAvailable) {
          // add slot to array
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          })
        }




        // increment current time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    if (!slotTime) {
      return toast.warn('Please select a time slot')
    }

    try {
      const date = docSlots[slotIndex][0].dateTime

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      )

      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDocInfo()
    setSlotIndex(0)
    setSlotTime('')
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  return (
    docInfo && (
      <div className='py-8'>
        {/* Doctor Card */}
        <div className='bg-med-card/50 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row gap-6 md:gap-8 items-start'>
          {/* Doctor Image */}
          <div className='w-full sm:w-72 max-h-72 sm:max-h-none shrink-0 overflow-hidden rounded-2xl bg-med-dark/40 flex items-center justify-center'>
            <img
              className='w-full h-full sm:h-auto object-cover object-top rounded-2xl'
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          {/* Doctor Info */}
          <div className='flex-1 w-full'>
            <p className='flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-white'>
              {docInfo.name}
              <BadgeCheck className='w-6 h-6 text-sky-400 shrink-0' />
            </p>

            <div className='flex items-center gap-3 text-sm mt-3 text-gray-300'>
              <p>
                {docInfo.degree} - <span className='capitalize'>{docInfo.speciality}</span>
              </p>
              <span className='py-0.5 px-3 border border-med-accent/40 text-xs rounded-full text-med-accent font-medium'>
                {docInfo.experience}
              </span>
            </div>

            {/* Doctor About */}
            <div className='mt-5'>
              <p className='flex items-center gap-1.5 text-sm font-semibold text-white'>
                About
              </p>
              <p className='text-sm text-gray-300 max-w-[700px] mt-2 leading-relaxed'>
                {docInfo.about}
              </p>
            </div>

            {/* Appointment Fee */}
            <p className='text-gray-300 font-medium mt-5'>
              Appointment fee:{' '}
              <span className='text-white font-semibold'>
                {currencySymbol}{docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ----- Booking Slots ----- */}
        <div className='mt-8 font-medium text-white'>
          <p className='text-xl font-semibold text-white'>Booking slots</p>

          {/* Days of week */}
          <div className='flex gap-3 items-center w-full overflow-x-auto mt-4 py-2 no-scrollbar'>
            {docSlots.length > 0 &&
              docSlots.map((item, index) => {
                const dateObj = new Date()
                dateObj.setDate(dateObj.getDate() + index)

                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSlotIndex(index)
                      setSlotTime('')
                    }}
                    className={`text-center py-6 min-w-16 rounded-2xl cursor-pointer transition-all duration-200 border ${slotIndex === index
                      ? 'bg-med-accent text-med-dark font-semibold border-med-accent shadow-md'
                      : 'border-white/10 text-gray-300 hover:border-white/30 bg-med-card/40'
                      }`}
                  >
                    <p className='text-xs uppercase font-medium'>
                      {daysOfWeek[dateObj.getDay()]}
                    </p>
                    <p className='text-lg font-semibold mt-1'>
                      {dateObj.getDate()}
                    </p>
                  </div>
                )
              })}
          </div>

          {/* Time slots for selected day */}
          <div className='flex items-center gap-3 w-full overflow-x-auto mt-4 py-2 no-scrollbar'>
            {docSlots.length > 0 && docSlots[slotIndex]?.length > 0 ? (
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-200 border ${item.time === slotTime
                    ? 'bg-med-accent text-med-dark font-semibold border-med-accent shadow-md'
                    : 'text-gray-300 border-white/10 hover:border-white/30 bg-med-card/40'
                    }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            ) : (
              <p className='text-sm text-gray-400 italic py-2'>
                No appointment slots available for today. Please select another day.
              </p>
            )}
          </div>

          {/* Book appointment button */}
          <button onClick={bookAppointment} className='w-full sm:w-auto bg-med-accent text-med-dark text-sm font-semibold px-12 py-3.5 rounded-full mt-6 hover:bg-white transition-all duration-300 shadow-md cursor-pointer'>
            Book an appointment
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  )
}

export default Appointment
