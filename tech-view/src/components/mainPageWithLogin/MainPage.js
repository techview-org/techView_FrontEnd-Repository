import Navbar from '../Navbar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState, useEffect } from 'react';
// import Render from './post.js';
import PostFeed from './newPostPage';
import Dropdown from './Dropdown'
import InputField from './InputField';
import NavbarWithLogin from '../NavbarWithLogin';

export default function MainPage() {
  const background = {
    backgroundColor: '#0D2129',
  }
  const [isClicked, setIsClicked] = useState(false)
  const [questions, setQuestions] = useState([])
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    // console.log(isClicked)
    loadPost()
  }, [])


  function loadPost() {
    fetch('http://localhost:4005/post')
      .then(res => res.json())
      .then(json => {
        setQuestions(json);
        setLikes(questions.likes)
      })
  }

  return (
    <>
      <NavbarWithLogin />
      {/* <Dropdown setIsFiltered={setIsFiltered} setCategory={setCategory}/> */}
      <InputField isClicked={isClicked} setIsClicked={setIsClicked} loadPost={loadPost} />
      <div style={background}>  <PostFeed isClicked={isClicked} questions={questions} setQuestions={setQuestions} likes={likes} setLikes={setLikes} loadPost={loadPost} />  </div>
      {/* <Footer /> */}
    </>
  )
}
