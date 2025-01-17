
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
