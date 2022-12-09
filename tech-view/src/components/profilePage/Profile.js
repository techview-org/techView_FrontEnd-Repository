import './Profile.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import img from './img.jpg'

export default function Profile() {
    console.log(localStorage)
    return (
        <>
        <Navbar/>
            <div className="card">
                <img src={img} alt="Profile picture" style={{width:"100%"}}/>
                <h1 className="username">Wayne</h1>
                <p className="email">world@gmail.com</p>
                <button>Change email</button>
            </div>
            <Footer/>
        </>
    )
}