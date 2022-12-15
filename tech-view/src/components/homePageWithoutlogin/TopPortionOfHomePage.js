import { Link } from 'react-router-dom'
import homepageImage from '../homepageImage.png'
import './TopPortionOfHomePage.css'

export default function TopPortionOfHomePage () {
  return (
    <div className='mainDivStyling'>
      <div>
        <h1 className='h1'>MINORITIES EMPOWERING MINORITIES</h1>
        <h4 className='h4'>Create an account to recive help from fellow BIPOC members!</h4>
        <Link to='/signup'><button className='signUp'>Sign up!</button></Link>
      </div>
      <img src={homepageImage} alt='people looking at forum posts' />
    </div>
  )
}