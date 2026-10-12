import doc1 from './TopDoctors/doctor1.jpg'
import doc2 from './TopDoctors/doctor2.jpg'
import doc3 from './TopDoctors/doctor3.jpg'
import doc4 from './TopDoctors/doctor4.jpg'
import doc5 from './TopDoctors/doctor5.jpg'
import doc6 from './TopDoctors/doctor6.jpg'
import doc7 from './TopDoctors/doctor7.jpg'
import doc8 from './TopDoctors/doctor8.jpg'
import doc9 from './TopDoctors/doctor9.jpg'
import doc10 from './TopDoctors/doctor10.jpg'

import generalphysicianavatar from './generalphysicianavatar.png'
import gestroenterologist from './gestroenterologist.png'
import gynecology from './gynecology.avif'
import neurologist from './neurologist.png'
import pediatrician from './pediatrician.png'
import dermotologist from './dermotologist.png'
import ctaDoctor from './ctadoctor.png'

export { ctaDoctor }

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

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'generalphysician',
    available: true,
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'gynecology',
    available: true,
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'dermotologist',
    available: true,
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: doc4,
    speciality: 'pediatrician',
    available: false,
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'neurologist',
    available: true,
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'gestroenterologist',
    available: true,
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'generalphysician',
    available: true,
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'gynecology',
    available: false,
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'dermotologist',
    available: true,
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'pediatrician',
    available: true,
  },
]
