import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Internship from './pages/Internship'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/internships' element={<Internship/>}/>
      </Routes>
      
    
    </BrowserRouter>
  )
}

export default App
