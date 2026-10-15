import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assets/login.jpg'
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState('SignUp') // 'Login' or 'Sign Up'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In future integration, dispatch authentication to backend
    console.log({ state, name, email, password, rememberMe })
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='min-h-[75vh] flex items-center justify-center py-4 sm:py-12'>
      <div className='w-full max-w-4xl bg-med-card/30 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row backdrop-blur-md'>
        
        {/* Left Side: Stethoscope Image & Brand Overlay */}
        <div className='w-full md:w-1/2 relative min-h-[220px] sm:min-h-[320px] md:min-h-[520px] overflow-hidden flex flex-col justify-end p-5 sm:p-8 md:p-10'>
          <img
            src={loginImg}
            alt='Medical Care Stethoscope'
            className='absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700'
          />
          {/* Subtle gradient overlay to enhance legibility and match dark theme */}
          <div className='absolute inset-0 bg-gradient-to-t from-med-dark via-med-dark/60 to-transparent' />

          {/* Left overlay text */}
          <div className='relative z-10 flex flex-col gap-1.5 sm:gap-2'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-med-card/70 border border-white/10 text-med-accent text-[11px] sm:text-xs font-semibold w-max backdrop-blur-sm'>
              <span>Prescripto Healthcare</span>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight'>
              Your Trusted Care, Just a Click Away
            </h2>
            <p className='text-gray-300 text-xs sm:text-sm line-clamp-2'>
              Connect with leading certified specialists and manage your appointments seamlessly.
            </p>
          </div>
        </div>

        {/* Right Side: Login / Sign Up Form */}
        <div className='w-full md:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-center bg-med-card/40'>
          <div className='mb-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-white'>
              {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className='text-gray-300 text-sm mt-1.5'>
              {state === 'Sign Up'
                ? 'Sign up to start booking your doctor appointments'
                : 'Please login to manage your appointments'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            {/* Full Name field (Only shown in Sign Up mode) */}
            {state === 'Sign Up' && (
              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-medium text-gray-300'>Full Name</label>
                <div className='relative flex items-center'>
                  <User className='w-4 h-4 text-gray-400 absolute left-3.5' />
                  <input
                    type='text'
                    required
                    placeholder='Dr. / Mr. / Ms. John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 rounded-xl bg-med-dark/70 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                  />
                </div>
              </div>
            )}

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
              <div className='flex items-center justify-between'>
                <label className='text-xs font-medium text-gray-300'>Password</label>
                {state === 'Login' && (
                  <button
                    type='button'
                    className='text-xs text-med-accent hover:underline cursor-pointer'
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className='relative flex items-center'>
                <Lock className='w-4 h-4 text-gray-400 absolute left-3.5' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder='Enter your password'
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

            {/* Remember Me Checkbox (in Login mode) */}
            {state === 'Login' && (
              <div className='flex items-center gap-2 mt-1'>
                <input
                  type='checkbox'
                  id='remember'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='w-4 h-4 rounded border-gray-600 accent-med-accent bg-med-dark cursor-pointer'
                />
                <label htmlFor='remember' className='text-xs text-gray-300 cursor-pointer select-none'>
                  Remember me on this device
                </label>
              </div>
            )}

            {/* Action Submit Button */}
            <button
              type='submit'
              className='mt-2 flex items-center justify-center gap-2 bg-med-accent text-med-dark font-semibold py-3.5 px-6 rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer shadow-lg shadow-med-accent/20 group'
            >
              <span>{state === 'Sign Up' ? 'Create Account' : 'Login'}</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </form>

          {/* Toggle between Login and Sign Up */}
          <div className='mt-6 text-center text-sm text-gray-300'>
            {state === 'Sign Up' ? (
              <p>
                Already have an account?{' '}
                <span
                  onClick={() => setState('Login')}
                  className='text-med-accent font-medium hover:underline cursor-pointer ml-1'
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <span
                  onClick={() => navigate('/create-account')}
                  className='text-med-accent font-medium hover:underline cursor-pointer ml-1'
                >
                  Create one here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login