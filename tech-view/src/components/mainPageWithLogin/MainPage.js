import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
import Dropdown from './Dropdown'
import { useEffect, useState } from 'react'

export default function MainPage () {
  // isPosted is meant to be a boolean, set isPosted to true when post is submitted
  const [isPosted, setIsPosted] = useState(false)

  useEffect(() => {
    if (isPosted) {
      fetch('http://localhost:4005/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 1, // should come from local storage, but this is the current users id
          post_title: 'hahah', // replace with the title that the user inputs
          post_description: 'dhfgilsdhfgbyusogn', // replace with the description that the user inputs
          post_type: 'Behavioral' // replace with the type that the user inputs
        })
      })
    }
  }, [isPosted])

  return (
    <>
      <Navbar />
      <Dropdown />
      <button onClick={() => { setIsPosted(true) }}>Create a New Post</button>
      <PostCardsContainer />
      <Footer />
    </>
  )
}
