import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ProjectManagement from './pages/ProjectManagement'


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
          <Route path='/manage' element={<ProjectManagement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
      
    </>
  )
}

export default App
