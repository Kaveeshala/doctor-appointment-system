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
    <div id='speciality' className='flex flex-col items-center justify-center gap-6 p-9'>
      <h1 className='text-2xl font-medium text-white'>Find By Speciality</h1>
      <p className='text-lg text-gray-300 max-w-2xl text-center'>
        Simply browse through our extensive list of trusted doctors,schedule ypur oppointment hassle-free.
      </p>
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto py-2'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2 transition-all duration-300'
          >
            <img
              src={item.image}
              alt={item.speciality}
              className='w-16 sm:w-24 h-16 sm:h-24 rounded-full object-cover mb-2'
            />
            <p className='text-sm text-gray-300 text-center font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu