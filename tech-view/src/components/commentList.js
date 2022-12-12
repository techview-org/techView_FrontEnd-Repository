
import React, { Component ,useState, useEffect} from 'react';

export default function CommentList() {
  // const [posts,setPosts] = useState("")
  const background = {
    backgroundColor:"gray"
  
}
      useEffect(() => {
  
          let welcome_id =1
          fetch(`http://localhost:4005/comments/${welcome_id}`).then(res => res.json())
          .then(result => {
              console.log(result);
              
            return (
              <ul role="list" >
                {result.map((item) => (
                  <li style = {background}  className="py-4">
            {item}
                  </li>
                ))}
              </ul>
            )
                })
            
      },[]);
    }

          
          
        
        
             
      


  
