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
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective management of chronic health conditions.',
    fees: 50,
    available: true,
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'gynecology',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      "Dr. Emily Larson specializes in women's reproductive health, prenatal care, and preventive screenings, providing personalized and compassionate treatment for patients of all ages.",
    fees: 60,
    available: true,
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'dermotologist',
    degree: 'MBBS',
    experience: '1 Year',
    about:
      'Dr. Sarah Patel is dedicated to clinical and cosmetic dermatology, providing expert diagnosis and advanced treatments for various skin disorders, acne, and hair care.',
    fees: 40,
    available: true,
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: doc4,
    speciality: 'pediatrician',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      "Dr. Christopher Lee is an experienced pediatrician dedicated to children's well-being, growth monitoring, developmental assessments, and pediatric immunization.",
    fees: 45,
    available: false,
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Jennifer Garcia has extensive experience diagnosing and treating complex neurological disorders, including migraines, epilepsy, and central nervous system health.',
    fees: 70,
    available: true,
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'gestroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Andrew Williams specializes in the digestive system, liver disorders, and therapeutic endoscopy, focusing on evidence-based gastrointestinal wellness.',
    fees: 65,
    available: true,
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'generalphysician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Christopher Davis brings a holistic approach to patient wellness, emphasizing routine check-ups, lifestyle medicine, and timely illness intervention.',
    fees: 50,
    available: true,
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'gynecology',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Dr. Timothy White is passionate about maternal-fetal wellness, adolescent gynecology, and providing supportive, state-of-the-art care for women.',
    fees: 55,
    available: false,
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'dermotologist',
    degree: 'MBBS',
    experience: '1 Year',
    about:
      'Dr. Ava Mitchell focuses on patient-centric dermatological care, addressing skin rejuvenation, allergic conditions, and modern dermatologic therapies.',
    fees: 45,
    available: true,
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'pediatrician',
    degree: 'MBBS',
    experience: '5 Years',
    about:
      'Dr. Jeffrey King has over five years of dedicated practice in pediatric healthcare, creating a gentle and welcoming environment for children and families.',
    fees: 50,
    available: true,
  },
]
