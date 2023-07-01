import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import ContactUs from './pages/ContactUs'
import Internship from './pages/Internship'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/internships' element={<Internship/>}/>
      </Routes>
      
    
    </BrowserRouter>
  )
}

export default App
