import { useEffect, useState } from 'react'
import './InputField.css'

export default function InputField({ isClicked, setIsClicked, loadPost }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [questionType, setQuestionType] = useState('Technical')

    // useEffect(() => {
    //     debugger
    //         fetch("http://localhost:4005/addPost", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             username: "user1",
    //             post_title: title,
    //             post_description: description,
    //             post_type: "Technical"
    //         }),
    //     })
    //     return () => {
    //         setIsClicked(false)
    //     }
    // }, [isClicked]) //isClicked

    function createPost() {
        
        fetch("http://localhost:4005/addPost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: localStorage.getItem('user'),
                post_title: title,
                post_description: description,
                post_type: questionType
            }),
        }).then(res => {
            
            loadPost()
        })
    }

    return (
        <div className='inputField'>
            <input className='titleField' placeholder="Title" onChange={(e) => { setTitle(e.target.value) }}></input>
            <br></br>
             <select className='titleField' onChange={(e) => {setQuestionType(e.target.value)}}>
                <option value="Technical">Technical</option>
                <option value="Behavorial">Behavioral</option>
                <option value="LeetCode 75">LeetCode 75</option>
             </select>
            <textarea className='detailsField' placeholder="What are the details of your problem?" onChange={(e) => { setDescription(e.target.value) }}></textarea>
            <br></br>
            
            <button className="postButton" onClick={() => { createPost() }}>Post!</button>
        </div>
    )
}