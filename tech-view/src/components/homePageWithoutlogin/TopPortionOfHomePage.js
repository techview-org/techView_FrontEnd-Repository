import { Link } from 'react-router-dom'
import homepageImage from '../homepageImage.png'

export default function TopPortionOfHomePage () {
  const mainDivStyling = {
    marginTop: 0,
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#6A9FB4'
  }
  return (
    <div style={mainDivStyling}>
      <div>
        <h2>MINORITIES EMPOWER MINORITIES</h2>
        <p>Join us today and contribute to the conversation.</p>
        <Link to='/signup'><button>Signup Now!</button></Link>
      </div>
      <img src={homepageImage} alt='people looking at forum posts' />
    </div>
  )
}
