import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'

export default function MainPage () {
  return (
    <>
      <Navbar />
      {/* <SideBar /> */}
      <Dropdown />
      <button>Create a New Post</button>
      <PostCardsContainer />
      <Footer />
    </>
  )
}
