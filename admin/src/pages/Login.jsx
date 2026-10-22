import { useState, useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Admin') // 'Admin' or 'Doctor'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {setAToken,backendUrl} = useContext(AdminContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (state === 'Admin') {
        const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password})

        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
          
        }else {
          toast.error(data.message)
        }
        
      } else {
        toast.info('Doctor login route will be configured here.')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/40 relative overflow-hidden'>
      {/* Decorative background glow spheres */}
      <div className='absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none' />
      <div className='absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none' />

      {/* Main card */}
      <div className='w-full max-w-[420px] bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-xl shadow-indigo-100/40 p-6 sm:p-8 relative z-10 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100/60'>
        
        {/* Brand header */}
        <div className='flex flex-col items-center mb-6 text-center'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl ring-4 ring-primary/5 shadow-inner'>
              {/* Prescripto cross icon */}
              <svg className='w-5 h-5 text-primary' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z'/>
              </svg>
            </div>
            <div className='text-left leading-none'>
              <span className='text-lg font-bold tracking-tight text-slate-800'>Prescripto</span>
              <span className='text-primary font-bold text-xl'>.</span>
              <p className='text-[10px] uppercase font-semibold text-slate-400 tracking-wider'>Portal Suite</p>
            </div>
          </div>

          {/* Role Pill Switcher */}
          <div className='inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/70 mt-3 w-full max-w-[280px]'>
            <button
              type='button'
              id='role-admin-btn'
              onClick={() => setState('Admin')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                state === 'Admin'
                  ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
              Admin Portal
            </button>
            <button
              type='button'
              id='role-doctor-btn'
              onClick={() => setState('Doctor')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                state === 'Doctor'
                  ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
              </svg>
              Doctor Portal
            </button>
          </div>
        </div>

        {/* Title & subtitle */}
        <div className='mb-5'>
          <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>
            <span className='text-primary'>{state}</span> Login
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1'>
            Sign in with your authorized credentials to access the {state.toLowerCase()} dashboard.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
          {/* Email input field */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor='admin-email-input' className='text-xs font-semibold text-slate-700'>
              Email Address
            </label>
            <div className='relative flex items-center'>
              <div className='absolute left-3.5 pointer-events-none text-slate-400'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206' />
                </svg>
              </div>
              <input
                id='admin-email-input'
                type='email'
                required
                autoComplete='email'
                placeholder={state === 'Admin' ? 'admin@prescripto.com' : 'doctor@prescripto.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200'
              />
            </div>
          </div>

          {/* Password input field */}
          <div className='flex flex-col gap-1.5'>
            <div className='flex items-center justify-between'>
              <label htmlFor='admin-password-input' className='text-xs font-semibold text-slate-700'>
                Password
              </label>
              <button
                type='button'
                onClick={() => {}}
                className='text-xs text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer'
              >
                Forgot password?
              </button>
            </div>
            <div className='relative flex items-center'>
              <div className='absolute left-3.5 pointer-events-none text-slate-400'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              <input
                id='admin-password-input'
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete='current-password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200'
              />
              <button
                type='button'
                id='toggle-password-btn'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md cursor-pointer'
              >
                {showPassword ? (
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18' />
                  </svg>
                ) : (
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me option */}
          <div className='flex items-center gap-2 pt-0.5'>
            <input
              type='checkbox'
              id='admin-remember-me'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className='w-4 h-4 rounded border-slate-300 text-primary accent-primary focus:ring-primary/20 cursor-pointer'
            />
            <label htmlFor='admin-remember-me' className='text-xs text-slate-600 select-none cursor-pointer'>
              Stay signed in on this workstation
            </label>
          </div>

          {/* Submit Action Button */}
          <button
            type='submit'
            id='admin-login-submit-btn'
            disabled={isLoading}
            className='mt-2 w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-xl text-sm shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer'
          >
            {isLoading ? (
              <>
                <svg className='animate-spin h-4 w-4 text-white' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                </svg>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Login to {state}</span>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Switch State Link - Tutorial Compliant */}
        <div className='mt-6 pt-5 border-t border-slate-100 text-center text-xs sm:text-sm text-slate-500'>
          {state === 'Admin' ? (
            <p>
              Doctor Login?{' '}
              <span
                id='switch-to-doctor-link'
                onClick={() => setState('Doctor')}
                className='text-primary font-semibold underline underline-offset-4 cursor-pointer hover:text-primary-dark transition-colors ml-1'
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Admin Login?{' '}
              <span
                id='switch-to-admin-link'
                onClick={() => setState('Admin')}
                className='text-primary font-semibold underline underline-offset-4 cursor-pointer hover:text-primary-dark transition-colors ml-1'
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login