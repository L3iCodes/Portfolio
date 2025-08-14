import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'


function App() {
  return (
    <>
    
    <div className='pageWrapper'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
