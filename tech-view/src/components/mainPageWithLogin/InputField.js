import './InputField.css'

export default function InputField() {
    return (
        <div className='inputField'>
            <input className='titleField' placeholder="Title"></input>
            <br></br>
            <textarea className='detailsField' placeholder="What are the details of your problem?"></textarea>
            <br></br>
            <button className="postButton">Post!</button>
        </div>
    )
}