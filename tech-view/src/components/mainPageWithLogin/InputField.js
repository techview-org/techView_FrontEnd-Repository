import { useEffect, useState } from 'react'
import './InputField.css'

export default function InputField() {
    const [isClicked, setIsClicked] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetch("http://localhost:4005/addPost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "user1",
                post_title: title,
                post_description: description,
                post_type: "Technical"
            }),
        })
    }, [isClicked])

    return (
        <div className='inputField'>
            <input className='titleField' placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}></input>
            <br></br>
            <textarea className='detailsField' placeholder="What are the details of your problem?" onChange={(e) => { setDescription(e.target.value) }}></textarea>
            <br></br>
            <button className="postButton" onClick={() => {setIsClicked(true)}}>Post!</button>
        </div>
    )
}