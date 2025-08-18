import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ProjectManagement from './pages/ProjectManagement'
import Notification from './components/Notification'
import { useContext } from 'react';
import { NotificatioNContext } from './context/NotificationContext'
export const MANAGE_URL = import.meta.env.VITE_MANAGE_URL;

function App() {
  const { openNotification, notificationMessage, error } = useContext(NotificatioNContext)

  return (
    <>
    <div className='pageWrapper'>
      <Router>
        <Navbar />
        {openNotification && (<Notification message={notificationMessage} error={error}/>)}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path={`/${MANAGE_URL}`} element={<ProjectManagement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
      
    </>
  )
}

export default App
