import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import HomePageBeforeLogin from './pages/HomePageBeforeLogin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePageBeforeLogin/>}/>
          {/* <Route exact path='/home' element={HomePageAfterLogin}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
