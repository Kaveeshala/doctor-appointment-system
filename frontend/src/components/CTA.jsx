import React from 'react'
import { useNavigate } from 'react-router-dom'
import ctaDoctor from '../assets/ctadoctor.png'

const CTA = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl md:rounded-3xl px-6 sm:px-10 md:px-14 lg:px-16 my-16 md:mx-10 overflow-hidden shadow-2xl relative'>
      {/* Left side content */}
      <div className='flex-1 py-10 sm:py-12 md:py-16 lg:py-20 text-center md:text-left z-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-med-dark leading-snug'>
          Book Appointment <br className='hidden sm:block' />
          <span className='text-med-card'>With 100+ Trusted Doctors</span>
        </h2>
        <button
          onClick={() => {
            navigate('/create-account')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className='bg-med-dark text-white hover:bg-med-card font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full mt-6 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer'
        >
          Create Account
        </button>
      </div>

      {/* Right side image */}
      <div className='w-64 sm:w-80 md:w-1/2 lg:w-[370px] flex justify-center md:justify-end self-end mt-4 md:mt-0'>
        <img
          src={ctaDoctor}
          alt='Doctor CTA'
          className='w-full max-h-72 sm:max-h-80 md:max-h-[360px] object-contain drop-shadow-md'
        />
      </div>
    </div>
  )
}
export default CTA

