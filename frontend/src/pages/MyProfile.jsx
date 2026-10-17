import React, { useState } from 'react'
import profilePic from '../assets/profile pic.avif'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Edit3,
  Save,
  X,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: profilePic,
    email: 'edward.vincent@example.com',
    phone: '+1 (415) 555-0198',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Church Road, London',
    },
    gender: 'Male',
    dob: '2000-01-20',
  })

  // Backup for cancel action
  const [tempData, setTempData] = useState({ ...userData })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setTempData((prev) => ({ ...prev, image: imageUrl }))
    }
  }

  const handleStartEdit = () => {
    setTempData({ ...userData, address: { ...userData.address } })
    setIsEdit(true)
  }

  const handleCancelEdit = () => {
    setTempData({ ...userData, address: { ...userData.address } })
    setIsEdit(false)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setUserData({ ...tempData, address: { ...tempData.address } })
    setIsEdit(false)
    setSuccessMessage('Profile details updated successfully!')
    setTimeout(() => {
      setSuccessMessage('')
    }, 3500)
  }

  return (
    <div className='max-w-3xl mx-auto py-8 sm:py-12'>
      {/* Title */}
      <div className='mb-8 text-center sm:text-left'>
        <h1 className='text-2xl sm:text-3xl font-bold text-white'>
          Patient <span className='text-med-accent'>Profile</span>
        </h1>
        <p className='text-gray-400 text-sm mt-1'>
          Manage your personal information, contact coordinates, and preferences.
        </p>
      </div>

      {/* Success Alert */}
      {successMessage && (
        <div className='mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm animate-fade-in'>
          <CheckCircle2 className='w-5 h-5 flex-shrink-0 text-emerald-400' />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Main Profile Card */}
      <div className='bg-med-card/30 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col gap-8'>
        {/* Top Section: Avatar + Name */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10'>
          {/* Avatar with optional upload */}
          <div className='relative group'>
            <img
              src={isEdit ? tempData.image : userData.image}
              alt={userData.name}
              className='w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover ring-4 ring-med-accent/40 shadow-xl'
            />
            {isEdit && (
              <label
                htmlFor='profile-upload'
                className='absolute inset-0 bg-med-dark/80 rounded-2xl flex flex-col items-center justify-center gap-1 text-white opacity-90 hover:opacity-100 cursor-pointer transition-opacity backdrop-blur-xs'
              >
                <Camera className='w-6 h-6 text-med-accent' />
                <span className='text-[11px] font-medium'>Change Photo</span>
                <input
                  id='profile-upload'
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden'
                />
              </label>
            )}
          </div>

          {/* Name & Account Badge */}
          <div className='flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2 w-full'>
            <div className='flex items-center gap-2'>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium'>
                <ShieldCheck className='w-3.5 h-3.5' />
                Verified Patient
              </span>
            </div>

            {isEdit ? (
              <div className='w-full max-w-md mt-1'>
                <label className='text-xs font-medium text-gray-400 block mb-1'>Full Name</label>
                <input
                  type='text'
                  value={tempData.name}
                  onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                  placeholder='Your full name'
                  className='w-full px-4 py-2.5 rounded-xl bg-med-dark/70 border border-med-accent/60 text-white font-semibold text-lg focus:outline-none'
                />
              </div>
            ) : (
              <h2 className='text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1'>
                {userData.name}
              </h2>
            )}

            <p className='text-gray-400 text-xs sm:text-sm flex items-center gap-1.5'>
              <Mail className='w-4 h-4 text-med-accent' />
              {userData.email}
            </p>
          </div>
        </div>

        {/* Section 1: Contact Information */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-xs font-semibold uppercase tracking-wider text-med-accent flex items-center gap-2'>
            <Phone className='w-4 h-4' />
            Contact Information
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-sm'>
            {/* Email Address */}
            <div className='bg-med-dark/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-1.5'>
              <span className='text-xs text-gray-400 font-medium'>Email Address</span>
              {isEdit ? (
                <input
                  type='email'
                  value={tempData.email}
                  onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                  className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none'
                />
              ) : (
                <span className='text-gray-200 font-medium break-all'>{userData.email}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className='bg-med-dark/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-1.5'>
              <span className='text-xs text-gray-400 font-medium'>Phone Number</span>
              {isEdit ? (
                <input
                  type='text'
                  value={tempData.phone}
                  onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                  className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none'
                />
              ) : (
                <span className='text-gray-200 font-medium'>{userData.phone}</span>
              )}
            </div>

            {/* Address */}
            <div className='bg-med-dark/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 md:col-span-2'>
              <span className='text-xs text-gray-400 font-medium flex items-center gap-1'>
                <MapPin className='w-3.5 h-3.5 text-med-accent' />
                Home Address
              </span>
              {isEdit ? (
                <div className='flex flex-col gap-2'>
                  <input
                    type='text'
                    placeholder='Address Line 1'
                    value={tempData.address.line1}
                    onChange={(e) =>
                      setTempData({
                        ...tempData,
                        address: { ...tempData.address, line1: e.target.value },
                      })
                    }
                    className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none'
                  />
                  <input
                    type='text'
                    placeholder='Address Line 2'
                    value={tempData.address.line2}
                    onChange={(e) =>
                      setTempData({
                        ...tempData,
                        address: { ...tempData.address, line2: e.target.value },
                      })
                    }
                    className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none'
                  />
                </div>
              ) : (
                <p className='text-gray-200 font-medium leading-relaxed'>
                  {userData.address.line1} <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Basic Information */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-xs font-semibold uppercase tracking-wider text-med-accent flex items-center gap-2'>
            <User className='w-4 h-4' />
            Basic Information
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-sm'>
            {/* Gender */}
            <div className='bg-med-dark/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-1.5'>
              <span className='text-xs text-gray-400 font-medium'>Gender</span>
              {isEdit ? (
                <select
                  value={tempData.gender}
                  onChange={(e) => setTempData({ ...tempData, gender: e.target.value })}
                  className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none cursor-pointer'
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                  <option value='Prefer not to say'>Prefer not to say</option>
                </select>
              ) : (
                <span className='text-gray-200 font-medium'>{userData.gender}</span>
              )}
            </div>

            {/* Date of Birth */}
            <div className='bg-med-dark/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-1.5'>
              <span className='text-xs text-gray-400 font-medium flex items-center gap-1'>
                <Calendar className='w-3.5 h-3.5 text-med-accent' />
                Birthday
              </span>
              {isEdit ? (
                <input
                  type='date'
                  value={tempData.dob}
                  onChange={(e) => setTempData({ ...tempData, dob: e.target.value })}
                  className='w-full px-3 py-2 rounded-lg bg-med-dark/80 border border-white/10 text-white text-sm focus:border-med-accent focus:outline-none'
                />
              ) : (
                <span className='text-gray-200 font-medium'>{userData.dob}</span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3'>
          {isEdit ? (
            <>
              <button
                type='button'
                onClick={handleCancelEdit}
                className='w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2'
              >
                <X className='w-4 h-4' />
                Cancel
              </button>
              <button
                type='button'
                onClick={handleSave}
                className='w-full sm:w-auto px-7 py-3 rounded-xl bg-med-accent text-med-dark hover:opacity-90 text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-med-accent/20 flex items-center justify-center gap-2'
              >
                <Save className='w-4 h-4' />
                Save Information
              </button>
            </>
          ) : (
            <button
              type='button'
              onClick={handleStartEdit}
              className='w-full sm:w-auto px-8 py-3 rounded-xl border border-med-accent text-med-accent hover:bg-med-accent hover:text-med-dark text-sm font-semibold transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2'
            >
              <Edit3 className='w-4 h-4' />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyProfile