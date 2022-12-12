import { React, useEffect, useState,  useContext} from 'react';


const postFetch = ( {post_title, post_description, post_type}) =>{
// const [posts,setPosts] = useState("")

    useEffect(() => {

        let welcome_id =""
        fetch('http://localhost:4005/user').then(res => res.json())
        .then(result => {
            console.log(result);
        welcome_id = result})

    const body = {  welcome_id, post_title, post_description, post_type };
    console.log(body)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }

    
fetch('http://localhost:4005/addPost', options)


}, [post_title, post_description, post_type]);


}

export default postFetch