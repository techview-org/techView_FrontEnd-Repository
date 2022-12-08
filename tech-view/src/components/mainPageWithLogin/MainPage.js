import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
import Dropdown from './Dropdown'

export default function MainPage () {
  return (
    <>
      <Navbar />
      <Dropdown />
      <button>Create a New Post</button>
      <PostCardsContainer />
      <Footer />
    </>
  )
}
