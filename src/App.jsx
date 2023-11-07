import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin' 
import RegistrationPage from './pages/RegistrationPage'


function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path='/' element={<HomePageBeforeLogin/>}/>
          <Route exact path='/register' element={<RegistrationPage/>}/>
          {/* <Route exact path='/home' element={HomePageAfterLogin}/> */}
        </Routes>
      </Router> 
    </>
  )
}

export default App
