import Navbar from '../Navbar'
import Footer from '../Footer'
import TopPortionOfHomePage from './TopPortionOfHomePage'
import BarWithBreakdownOfMissionStatement from './BarWithBreakdownOfMissionStatement'
import ImageWithDescriptionOfImage from './ImageWithDescriptionOfImage'
import pictureOfMainBoard from '../MainQ&A.png'

export default function HomePageWithoutLogin () {
  return (
    <>
      <Navbar />
      <TopPortionOfHomePage />
      <BarWithBreakdownOfMissionStatement />

    </>
  )
}
