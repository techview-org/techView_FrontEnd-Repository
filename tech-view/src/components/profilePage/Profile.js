import './Profile.css'

export default function Profile() {
    console.log(localStorage)
    return (
        <>
            <div className="card">
                <img src="img.jpg" alt="Profile picture" style={{width:"100%"}}/>
                <h1 className="username">{ localStorage.user }</h1>
                <p className="email">{ localStorage.email }</p>
                <button>Change email</button>
            </div>
        </>
    )
}