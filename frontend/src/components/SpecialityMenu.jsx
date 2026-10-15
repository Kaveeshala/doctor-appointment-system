import React from 'react'
import { Link } from 'react-router-dom'
import generalphysicianavatar from '../assets/generalphysicianavatar.png'
import gestroenterologist from '../assets/gestroenterologist.png'
import gynecology from '../assets/gynecology.avif'
import neurologist from '../assets/neurologist.png'
import pediatrician from '../assets/pediatrician.png'
import dermotologist from '../assets/dermotologist.png'

export const specialityData = [
  {
    speciality: 'generalphysician',
    image: generalphysicianavatar,
  },
  {
    speciality: 'gestroenterologist',
    image: gestroenterologist,
  },
  {
    speciality: 'gynecology',
    image: gynecology,
  },
  {
    speciality: 'neurologist',
    image: neurologist,
  },
  {
    speciality: 'pediatrician',
    image: pediatrician,
  },
  {
    speciality: 'dermotologist',
    image: dermotologist,
  },
]

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center justify-center gap-4 py-12 sm:py-16 px-2 text-center'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-white'>Find By Speciality</h2>
      <p className='text-xs sm:text-sm text-gray-300 max-w-xl'>
        Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
      </p>
      <div className='flex sm:justify-center gap-4 sm:gap-6 pt-5 w-full overflow-x-auto py-3 no-scrollbar px-2'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2 transition-all duration-300 group'
          >
            <div className='w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-med-card/40 border border-white/10 group-hover:border-med-accent/60 transition-colors p-1.5 flex items-center justify-center shadow-md'>
              <img
                src={item.image}
                alt={item.speciality}
                className='w-full h-full object-contain rounded-full'
              />
            </div>
            <p className='text-xs sm:text-sm text-gray-300 group-hover:text-med-accent text-center font-medium mt-2 capitalize whitespace-nowrap'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu