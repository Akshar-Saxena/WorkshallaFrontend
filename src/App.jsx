import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin' 
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
{/*import ResetPasswordPage from'./pages/ResetPasswordPage'*/}
import CompaniesPage from'./pages/CompaniesPage'


function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path='/' element={<HomePageBeforeLogin/>}/>
          <Route exact path='/register' element={<RegistrationPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          {/*<Route exact path='/resetpassword' element={<ResetPasswordPage/>}/>*/} 
          <Route exact path='/companies' element={<CompaniesPage/>}/>

          
          
          {/* <Route exact path='/home' element={HomePageAfterLogin}/> */}
        </Routes>
      </Router> 
    </>
  )
}

export default App
