
import React, { Component ,useState, useEffect} from 'react';

export default function CommentList() {
  // const [posts,setPosts] = useState("")
  const background = {
    backgroundColor:"gray"
  
}
      useEffect(() => {
  
         
          fetch(`http://localhost:4005/comments/1`).then(res => res.json())
          .then(result => {
              console.log(result);
           
            return (
              <ul  >
                {result.map((item) => (
                  <li style = {background}  className="py-4">
           `Comment:{item}` 
                  </li>
                ))}
              </ul>
            )
               })  
            
      },[]);
    }

          
          
        
        
             
      


  
