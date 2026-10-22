import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Brand & Portal Type */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          {/* Prescripto medical cross logo icon */}
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl ring-2 ring-primary/10 shadow-inner group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
            </svg>
          </div>
          
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Prescripto<span className="text-primary">.</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {aToken ? 'Admin Panel' : 'Doctor Panel'}
            </span>
          </div>
        </div>

        {/* User Status & Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Admin identifier badge */}
          <div className="hidden sm:flex items-center gap-2.5 pl-3 py-1 pr-1 bg-slate-50 border border-slate-200/70 rounded-full">
            <div className="flex flex-col text-right leading-tight">
              <span className="text-xs font-semibold text-slate-700">Administrator</span>
              <span className="text-[10px] text-slate-400">Super User</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-indigo-400 text-white font-semibold flex items-center justify-center text-xs shadow-xs">
              AD
            </div>
          </div>

          {/* Logout button */}
          <button 
            onClick={logout}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 border border-slate-200 rounded-xl transition-all duration-200 shadow-xs cursor-pointer active:scale-95 group"
            title="Sign out of admin console"
          >
            <svg 
              className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar