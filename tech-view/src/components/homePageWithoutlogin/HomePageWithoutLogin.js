import Navbar from '../Navbar'
import Footer from '../Footer'
import TopPortionOfHomePage from './TopPortionOfHomePage'
import BarWithBreakdownOfMissionStatement from './BarWithBreakdownOfMissionStatement'
import ImageWithDescriptionOfImage from './ImageWithDescriptionOfImage'

export default function HomePageWithoutLogin () {
  return (
    <>
      <Navbar />
      <TopPortionOfHomePage />
      <BarWithBreakdownOfMissionStatement />
      <ImageWithDescriptionOfImage imgOnLeft imageSrc='' imageAlt='hello' descriptionOfImage='description of hello' />
      <ImageWithDescriptionOfImage imgOnLeft={false} imageSrc='' imageAlt='hi2' descriptionOfImage='description of hi part 2' />
      <Footer />
    </>
  )
}
