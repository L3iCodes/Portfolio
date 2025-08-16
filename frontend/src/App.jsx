import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
    <>
    <div className='pageWrapper'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
    
      
    </>
  )
}

export default App
