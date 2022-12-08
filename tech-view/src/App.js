import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomepageWithoutLogin from './components/homePageWithoutlogin/HomePageWithoutLogin'
import MainPage from './components/mainPageWithLogin/MainPage'
import ProfilePage from './components/profilePage/ProfilPage'

function App () {
  return (

    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mainpage' element={<MainPage />} />
    </Routes>
    // <MainPage />
  )
}

export default App
