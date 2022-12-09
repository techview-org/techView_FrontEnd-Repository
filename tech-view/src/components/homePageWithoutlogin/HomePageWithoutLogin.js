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
      <ImageWithDescriptionOfImage imgOnLeft imageSrc={pictureOfMainBoard} imageAlt='hello' style={{width:"30%",height:"30%"}}descriptionOfImage='Join our communtiy board today and contribute to the conversation' />
      {/* <ImageWithDescriptionOfImage imgOnLeft={false} imageSrc={pictureOfMainBoard} imageAlt='hello' descriptionOfImage='Join our communtiy board today and contribute to the conversation' /> */}
      <Footer />
    </>
  )
}
