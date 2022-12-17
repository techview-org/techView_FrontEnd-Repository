
import React, { Component, useState, useEffect } from 'react';

export default function CommentList({ postId }) {


  const [data, setData] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    fetch(`http://localhost:4005/comments/${postId}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, []);

  return (
    <ul  >
      {
        data.map(comment => (
          <li className="py-4">
            {comment.comment_description}
            <br></br>
            - {comment.username}
          </li>
        ))
      }
    </ul>
  )


}










