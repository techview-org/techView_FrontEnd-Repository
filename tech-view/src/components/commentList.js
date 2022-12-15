
import React, { Component ,useState, useEffect} from 'react';

export default function CommentList() {


const [data,setData] = useState("")
      useEffect(() => {
          fetch(`http://localhost:4005/comments/1`).then(res => res.json())
          .then(result => {
              console.log(result);
          console.log(result[0].comment_description)
        result.map(item=>{return setData(item.comment_description); }) })             
      },[data]);

            return (
              <ul  >
                  <li  className="py-4">
                       {data}
                  </li>
              </ul>
            )
             
  
    }

          
          
        
        
             
      


  
