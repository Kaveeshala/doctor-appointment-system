import React from 'react'
import { useNavigate } from 'react-router-dom'
import { doctors } from '../assets/assets'
export { doctors } from '../assets/assets'

const TopDoctors = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
      <h1 className='text-3xl font-semibold text-white'>Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-300'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 gap-y-8 px-3 sm:px-0'>
        {doctors.map((item) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/doctors/${item.speciality}`)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className='bg-med-card/50 hover:bg-med-card border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col group'
          >
            <div className='w-full h-56 overflow-hidden bg-med-dark/40 flex items-center justify-center'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            <div className='p-4 flex flex-col gap-1.5 flex-1 justify-between'>
              <div>
                <div className='flex items-center gap-2 text-xs mb-1.5'>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.available ? 'bg-emerald-400' : 'bg-gray-400'
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      item.available ? 'text-emerald-400' : 'text-gray-400'
                    }`}
                  >
                    {item.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <p className='text-white font-semibold text-base group-hover:text-med-accent transition-colors'>
                  {item.name}
                </p>
                <p className='text-gray-300 text-xs capitalize'>{item.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className='bg-med-accent text-med-dark hover:bg-white font-medium px-12 py-3 rounded-full mt-10 transition-all duration-300 hover:scale-105 shadow-md cursor-pointer'
      >
        More Doctors
      </button>
    </div>
  )
}

export default TopDoctors