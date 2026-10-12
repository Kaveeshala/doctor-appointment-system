import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="pb-16">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <CTA />
    </div>
  )
}

export default Home
