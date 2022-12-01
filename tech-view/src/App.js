
import MainPage from './components/MainPage'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  return (

    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element = {<Login/>} />
    </Routes>
    // <MainPage />
  )
}

export default App
