import { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const currencySymbol = 'Rs.'
  const backendURL = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '')
  const [doctors, setDoctors] = useState([])

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendURL + '/api/doctor/list')
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
  }

  useEffect(() => {
    getDoctorsData()
  }, [])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
