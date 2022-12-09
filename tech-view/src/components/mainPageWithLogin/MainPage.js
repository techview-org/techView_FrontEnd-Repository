import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
import Dropdown from './Dropdown'
import { useEffect, useState } from 'react'

export default function MainPage () {
  const [posts, setPosts] = useState([])
  // isPosted and isFiltered are meant to be booleans, set isPosted to true when post is submitted
  const [isPosted, setIsPosted] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  // categoryToFilterBy is meant to only be changed to one of the three given categories given: Behavioral, Technical, or LeetCode75
  const [categoryToFilterBy, setCategory] = useState()

  useEffect(() => {
    if (isFiltered) {
      fetch(`http://localhost:4005/post/${categoryToFilterBy}`)
        .then(res => res.json())
        .then(json => setPosts(json))
    }
  }, [categoryToFilterBy])

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
      <Dropdown setIsFiltered={setIsFiltered} setCategory={setCategory} />
      <button onClick={() => { setIsPosted(true) }}>Create a New Post</button>
      <PostCardsContainer posts={posts} setPosts={setPosts} />
      <Footer />
    </>
  )
}
