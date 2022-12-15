import Navbar from '../Navbar'
import Footer from '../Footer'
import TopPortionOfHomePage from './TopPortionOfHomePage'
import BarWithBreakdownOfMissionStatement from './BarWithBreakdownOfMissionStatement'

export default function HomePageWithoutLogin () {
  return (
    <>
      <Navbar />
      <TopPortionOfHomePage />
      <BarWithBreakdownOfMissionStatement />
    </>
  )
}
