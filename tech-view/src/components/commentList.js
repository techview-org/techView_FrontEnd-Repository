
import React, { Component ,useState, useEffect} from 'react';

export default function CommentList() {
  // const [posts,setPosts] = useState("")
  const background = {
    backgroundColor:"gray"
  
}
const [data,setData] = useState("")
      useEffect(() => {
          fetch(`http://localhost:4005/comments/1`).then(res => res.json())
          .then(result => {
              console.log(result);
           setData(result.map(item=>item.comment_description))  })  
            return (
              <ul  >
             
                  <li style = {background}  className="py-4">
           {data} 
                  </li>
            
              </ul>
            )
             
            
      },[]);
    }

          
          
        
        
             
      


  
