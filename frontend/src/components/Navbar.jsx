import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profilePic from "../assets/profile pic.avif";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const {token, setToken, userData} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }
 

  const closeMenu = () => setShowMenu(false);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ALL DOCTORS", path: "/doctors" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between text-sm py-4 mb-5 border-b border-med-card relative">
      {/* Brand Logo */}
      <div 
        onClick={() => {
          closeMenu();
          navigate('/');
        }} 
        className="cursor-pointer text-xl font-bold tracking-tight text-white flex items-center gap-1 z-20"
      >
        <span>Prescripto</span>
        <span className="text-med-accent">.</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-white/90">
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className="cursor-pointer hover:text-med-accent transition-colors"
          >
            <li className="py-1">{link.label}</li>
            <hr className="border-none outline-none h-0.5 bg-med-accent w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Desktop Profile / CTA & Mobile Toggle Button */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img 
              src={userData.image} 
              alt="Profile" 
              className="w-9 h-9 rounded-full object-cover ring-2 ring-med-accent/70"
            />
            {/* Dropdown Menu on hover */}
            <div className="absolute top-0 right-0 pt-12 text-sm font-medium text-white/90 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-med-dark border border-med-card rounded-xl flex flex-col gap-3 p-4 shadow-xl">
                <p 
                  onClick={() => navigate('/my-profile')} 
                  className="hover:text-med-accent cursor-pointer transition-colors"
                >
                  My Profile
                </p>
                <p 
                  onClick={() => navigate('/my-appointments')} 
                  className="hover:text-med-accent cursor-pointer transition-colors"
                >
                  My Appointments
                </p>
                <p 
                  onClick={logout} 
                  className="hover:text-med-accent cursor-pointer transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/create-account')} 
            className="hidden md:block bg-med-accent text-med-dark px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm"
          >
            Create Account
          </button>
        )}

        {/* Hamburger Icon for Mobile */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={showMenu}
          onClick={() => setShowMenu(prev => !prev)}
          className="md:hidden text-white/90 hover:text-med-accent p-2 rounded-lg hover:bg-med-card transition-colors cursor-pointer"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Backdrop */}
      {showMenu && (
        <div 
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-med-dark border-l border-med-card z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-med-card">
            <div 
              onClick={() => {
                closeMenu();
                navigate('/');
              }} 
              className="cursor-pointer text-lg font-bold text-white flex items-center gap-1"
            >
              <span>Prescripto</span>
              <span className="text-med-accent">.</span>
            </div>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-med-card transition-colors cursor-pointer"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Nav Links */}
          <ul className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-med-card text-med-accent border-l-4 border-med-accent"
                      : "text-white/80 hover:text-white hover:bg-med-card/60"
                  }`
                }
              >
                <li>{link.label}</li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Drawer Footer Profile / CTA */}
        <div className="pt-6 border-t border-med-card">
          {token ? (
            <div className="flex flex-col gap-3">
              <div 
                onClick={() => {
                  closeMenu();
                  navigate('/my-profile');
                }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-med-card/60 hover:bg-med-card cursor-pointer transition-colors"
              >
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-med-accent/70" 
                />
                <div>
                  <p className="font-semibold text-white">My Profile</p>
                  <p className="text-xs text-white/60">View details</p>
                </div>
              </div>
              <button
                onClick={() => {
                  closeMenu();
                  navigate('/my-appointments');
                }}
                className="w-full text-left px-4 py-2.5 text-white/80 hover:text-white rounded-xl hover:bg-med-card/50 transition-colors cursor-pointer font-medium"
              >
                My Appointments
              </button>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="w-full bg-red-500/20 text-red-300 py-2.5 rounded-xl font-medium hover:bg-red-500/30 transition-all cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                closeMenu();
                navigate('/create-account');
              }}
              className="w-full bg-med-accent text-med-dark py-3 rounded-full font-semibold hover:opacity-90 transition-all cursor-pointer shadow-md"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
