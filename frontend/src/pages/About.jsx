import React from 'react'
import aboutImage from '../assets/doctor-bg1.jpg'

const About = () => {
  return (
    <div className='py-8 sm:py-12'>
      {/* Title */}
      <div className='text-center text-2xl sm:text-3xl font-semibold tracking-wide mb-10'>
        <p className='text-gray-300'>
          ABOUT <span className='text-med-accent font-bold'>US</span>
        </p>
      </div>

      {/* Main About Section */}
      <div className='my-6 flex flex-col md:flex-row items-center gap-8 lg:gap-14 bg-med-card/30 border border-white/10 rounded-2xl p-5 sm:p-10 lg:p-12 shadow-xl'>
        {/* About Image */}
        <div className='w-full md:w-5/12 overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-med-dark/50'>
          <img
            src={aboutImage}
            alt='Healthcare Professionals'
            className='w-full h-64 sm:h-80 md:h-[380px] object-cover object-center hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* About Narrative */}
        <div className='flex flex-col justify-center gap-4 sm:gap-5 md:w-7/12 text-gray-300 text-sm sm:text-base leading-relaxed'>
          <p>
            Welcome to <span className='text-white font-semibold'>Prescripto</span>, your reliable healthcare partner dedicated to making doctor consultations and appointments effortless, timely, and accessible for everyone.
          </p>
          <p>
            We understand the challenges individuals and families face when managing their health. From finding the right specialist to fitting visits into a busy schedule, Prescripto streamlines every step through intuitive digital care coordination.
          </p>

          {/* Vision Callout Box */}
          <div className='mt-1 sm:mt-2 p-4 sm:p-5 rounded-xl bg-med-card/60 border-l-4 border-med-accent shadow-inner'>
            <h3 className='text-med-accent font-semibold text-sm sm:text-lg mb-1 sm:mb-1.5'>
              Our Vision
            </h3>
            <p className='text-gray-200 text-xs sm:text-sm leading-relaxed'>
              To revolutionize digital healthcare by bridging the gap between patients and trusted healthcare providers, creating a seamless, accessible, and compassionate medical experience for communities everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8 sm:my-12 text-center'>
        <div className='bg-med-card/30 border border-white/10 rounded-xl p-4 sm:p-5'>
          <p className='text-xl sm:text-3xl font-bold text-med-accent'>100+</p>
          <p className='text-[11px] sm:text-sm text-gray-300 mt-1'>Verified Doctors</p>
        </div>
        <div className='bg-med-card/30 border border-white/10 rounded-xl p-4 sm:p-5'>
          <p className='text-xl sm:text-3xl font-bold text-med-accent'>15+</p>
          <p className='text-[11px] sm:text-sm text-gray-300 mt-1'>Specialities</p>
        </div>
        <div className='bg-med-card/30 border border-white/10 rounded-xl p-4 sm:p-5'>
          <p className='text-xl sm:text-3xl font-bold text-med-accent'>10K+</p>
          <p className='text-[11px] sm:text-sm text-gray-300 mt-1'>Happy Patients</p>
        </div>
        <div className='bg-med-card/30 border border-white/10 rounded-xl p-4 sm:p-5'>
          <p className='text-xl sm:text-3xl font-bold text-med-accent'>99%</p>
          <p className='text-[11px] sm:text-sm text-gray-300 mt-1'>Satisfaction Rate</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='mt-12 sm:mt-16 mb-8'>
        <div className='text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center sm:text-left'>
          <p className='text-gray-300'>
            WHY <span className='text-med-accent font-bold'>CHOOSE US</span>
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
          {/* Card 1 */}
          <div className='flex flex-col gap-3 p-8 rounded-2xl bg-med-card/40 hover:bg-med-card border border-white/10 hover:border-med-accent/60 transition-all duration-300 shadow-md hover:-translate-y-1 group'>
            <div className='w-10 h-10 rounded-lg bg-med-accent/10 border border-med-accent/30 flex items-center justify-center text-med-accent font-bold text-lg mb-1 group-hover:scale-110 transition-transform'>
              ⚡
            </div>
            <h4 className='text-white font-semibold text-lg group-hover:text-med-accent transition-colors'>
              EFFICIENCY
            </h4>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Fast, streamlined appointment booking designed to match your busy lifestyle with instant confirmation and no waiting queues.
            </p>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col gap-3 p-8 rounded-2xl bg-med-card/40 hover:bg-med-card border border-white/10 hover:border-med-accent/60 transition-all duration-300 shadow-md hover:-translate-y-1 group'>
            <div className='w-10 h-10 rounded-lg bg-med-accent/10 border border-med-accent/30 flex items-center justify-center text-med-accent font-bold text-lg mb-1 group-hover:scale-110 transition-transform'>
              🩺
            </div>
            <h4 className='text-white font-semibold text-lg group-hover:text-med-accent transition-colors'>
              CONVENIENCE
            </h4>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Access a trusted network of board-certified medical practitioners and specialists from the comfort of your home or mobile device.
            </p>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col gap-3 p-8 rounded-2xl bg-med-card/40 hover:bg-med-card border border-white/10 hover:border-med-accent/60 transition-all duration-300 shadow-md hover:-translate-y-1 group'>
            <div className='w-10 h-10 rounded-lg bg-med-accent/10 border border-med-accent/30 flex items-center justify-center text-med-accent font-bold text-lg mb-1 group-hover:scale-110 transition-transform'>
              🎯
            </div>
            <h4 className='text-white font-semibold text-lg group-hover:text-med-accent transition-colors'>
              PERSONALIZATION
            </h4>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Tailored health recommendations, dedicated doctor profiles, and reminders to ensure you stay on top of your personalized wellness goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
