import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomepageWithoutLogin from './components/homePageWithoutlogin/HomePageWithoutLogin'


function App () {
  return (

    <Routes>
      <Route path='/' element={<HomepageWithoutLogin/>}></Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    // <MainPage />
  )
}

export default App
