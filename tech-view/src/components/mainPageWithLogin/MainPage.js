import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'

export default function MainPage () {
  return (
    <>
      <Navbar />
      {/* <SideBar /> */}
      <dropdown />
      <button>Create a New Post</button>
      <PostCardsContainer />
      <Footer />
    </>
  )
}

function dropdown () {
  return (
    <>
      <label for='categories'>Filter</label>
      <select name='categories'>
        <option>Behavioral</option>
        <option>Technical</option>
        <option>Code 75</option>
      </select>
    </>
  )
}
