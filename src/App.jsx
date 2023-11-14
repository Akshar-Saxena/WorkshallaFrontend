import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin' 
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import CompaniesPage from'./pages/CompaniesPage'
import { JobsPage } from './pages/JobsPage'
import ResetPassword from './pages/ResetPassword'
{/*import CoursesPage from'./pages/CoursesPage'
import CoursesPage2 from'./pages/CoursesPage2'
import ProfilePage from'./pages/ProfilePage'*/}


function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path='/' element={<HomePageBeforeLogin/>}/>
          <Route exact path='/register' element={<RegistrationPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/reset' element={<ResetPassword/>}/> 
          <Route exact path='/companies' element={<CompaniesPage/>}/>
          <Route exact path='/jobs' element={<JobsPage/>}/>
         {/*<Route exact path='/courses' element={<CoursesPage/>}/>
           <Route exact path='/courses2' element={<CoursesPage2/>}/>
           <Route exact path='/profile' element={<ProfilePage/>}/>*/}
          {/* <Route exact path='/home' element={HomePageAfterLogin}/> */}
        </Routes>
      </Router> 
    </>
  )
}

export default App
