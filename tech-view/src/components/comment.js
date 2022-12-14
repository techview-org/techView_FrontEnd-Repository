import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid';
import React, { Component, useState, useEffect } from 'react';
import "./mainPageWithLogin/post.css"



const categories = ['Behavioral', 'LeetCode 75', 'Technical'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Comment() {
  const [category, setCategory] = useState()
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [isClicked, setIsClicked] = useState(false)


  useEffect(() => {
    let likes = 5;
    console.log(likes)
    let welcome_id = 1

    console.log({ title, content, category })

    let body = { welcome_id, likes, };
    console.log(body)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }


    fetch('http://localhost:4005/new_comment', options)
  }
    , [isClicked]);



  return (
    <form className="form" >
      <label>
        Category:
        <select className="category" >
          {categories.map((category, index) =>
            <option key={category} onChange={(e) => { setCategory(e.target.value) }} value={category}>{category}</option>
          )}
        </select>
      </label>
      <label>
        Title:
        <input type="text" className="titles" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        Content:
        <input type="text" className="titles" placeholder="Content" onChange={(e) => setContent(e.target.value)} />
      </label>
      <center><div> <button className="button-default" onClick={(e) => { e.preventDefault(); setIsClicked(true) }}> Ask A Question!</button></div></center>

    </form>
  )
}