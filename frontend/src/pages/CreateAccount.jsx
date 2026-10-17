import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import createAccountImg from '../assets/createaccount.jpg'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'

const CreateAccount = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password) return

    setIsSuccess(true)
    setTimeout(() => {
      navigate('/login')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1500)
  }

  return (
    <div className='min-h-[75vh] flex items-center justify-center py-4 sm:py-12'>
      <div className='w-full max-w-4xl bg-med-card/30 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row backdrop-blur-md'>
        
        {/* Left Side: Create Account Image & Brand Overlay */}
        <div className='w-full md:w-1/2 relative min-h-[220px] sm:min-h-[320px] md:min-h-[540px] overflow-hidden flex flex-col justify-end p-5 sm:p-8 md:p-10'>
          <img
            src={createAccountImg}
            alt='Doctor Caring Stethoscope'
            className='w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 absolute inset-0'
          />
          {/* Subtle gradient overlay to enhance legibility and match dark theme */}
          <div className='absolute inset-0 bg-gradient-to-t from-med-dark via-med-dark/50 to-transparent' />

          {/* Left overlay text */}
          <div className='relative z-10 flex flex-col gap-1.5 sm:gap-2'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-med-card/70 border border-white/10 text-med-accent text-[11px] sm:text-xs font-semibold w-max backdrop-blur-sm'>
              <span>Join Prescripto</span>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight'>
              Compassionate Care For You & Your Family
            </h2>
            <p className='text-gray-300 text-xs sm:text-sm line-clamp-2'>
              Sign up today to explore certified medical experts, schedule appointments, and manage your health seamlessly.
            </p>
          </div>
        </div>

        {/* Right Side: Create Account Form */}
        <div className='w-full md:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-center bg-med-card/40'>
          <div className='mb-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-white'>Create Account</h2>
            <p className='text-gray-300 text-sm mt-1.5'>
              Please sign up to book appointment
            </p>
          </div>

          {isSuccess && (
            <div className='mb-5 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm'>
              <CheckCircle2 className='w-5 h-5 flex-shrink-0 text-emerald-400' />
              <span>Account created successfully! Redirecting to login...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            {/* Full Name Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-medium text-gray-300'>Full Name</label>
              <div className='relative flex items-center'>
                <User className='w-4 h-4 text-gray-400 absolute left-3.5' />
                <input
                  type='text'
                  required
                  placeholder='e.g. John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 rounded-xl bg-med-dark/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                />
              </div>
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-medium text-gray-300'>Email Address</label>
              <div className='relative flex items-center'>
                <Mail className='w-4 h-4 text-gray-400 absolute left-3.5' />
                <input
                  type='email'
                  required
                  placeholder='example@domain.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 rounded-xl bg-med-dark/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-medium text-gray-300'>Password</label>
              <div className='relative flex items-center'>
                <Lock className='w-4 h-4 text-gray-400 absolute left-3.5' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder='Create a secure password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full pl-10 pr-10 py-3 rounded-xl bg-med-dark/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3.5 text-gray-400 hover:text-white transition-colors cursor-pointer'
                >
                  {showPassword ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
                </button>
              </div>
            </div>

            {/* Terms & Privacy checkbox */}
            <div className='flex items-center gap-2 mt-1'>
              <input
                type='checkbox'
                id='terms'
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className='w-4 h-4 rounded border-gray-600 accent-med-accent bg-med-dark cursor-pointer'
              />
              <label htmlFor='terms' className='text-xs text-gray-300 cursor-pointer select-none'>
                I agree to the <span className='text-med-accent underline'>Terms of Service</span> & <span className='text-med-accent underline'>Privacy Policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='mt-2 flex items-center justify-center gap-2 bg-med-accent text-med-dark font-semibold py-3.5 px-6 rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer shadow-lg shadow-med-accent/20 group'
            >
              <span>Create Account</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </form>

          {/* Switch to Login */}
          <div className='mt-6 text-center text-sm text-gray-300'>
            <p>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-med-accent font-medium hover:underline cursor-pointer ml-1'
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
