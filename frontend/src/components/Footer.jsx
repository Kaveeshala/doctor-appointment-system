import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className='mt-20 text-gray-300'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        {/* Left Section - Brand & Bio */}
        <div>
          <div 
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} 
            className='cursor-pointer text-2xl font-bold tracking-tight text-white flex items-center gap-1 mb-5'
          >
            <span>Prescripto</span>
            <span className='text-med-accent'>.</span>
          </div>
          <p className='w-full md:w-4/5 text-gray-300 leading-6'>
            Prescripto is committed to making healthcare accessible and stress-free. 
            Connect with board-certified medical professionals, schedule appointments effortlessly, 
            and manage your wellness journey with confidence.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <p className='text-base font-semibold text-white mb-5 uppercase tracking-wider'>Company</p>
          <ul className='flex flex-col gap-2.5 text-gray-300'>
            <li>
              <Link 
                to='/' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='hover:text-med-accent transition-colors duration-200'
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to='/doctors' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='hover:text-med-accent transition-colors duration-200'
              >
                All Doctors
              </Link>
            </li>
            <li>
              <Link 
                to='/about' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='hover:text-med-accent transition-colors duration-200'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to='/contact' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='hover:text-med-accent transition-colors duration-200'
              >
                Contact Us
              </Link>
            </li>
            <li>
              <span className='hover:text-med-accent cursor-pointer transition-colors duration-200'>
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <p className='text-base font-semibold text-white mb-5 uppercase tracking-wider'>Get In Touch</p>
          <ul className='flex flex-col gap-2.5 text-gray-300'>
            <li className='hover:text-med-accent transition-colors duration-200 cursor-pointer'>
              +1 (212) 456-7890
            </li>
            <li className='hover:text-med-accent transition-colors duration-200 cursor-pointer'>
              support@prescripto.com
            </li>
            <li className='text-gray-400 text-xs mt-1'>
              Mon - Fri: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div>
        <hr className='border-med-card' />
        <p className='py-6 text-sm text-center text-gray-400'>
          Copyright © {new Date().getFullYear()} Prescripto - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
