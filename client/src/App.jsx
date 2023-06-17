
import Form from './Pages/Form'
import Welcome from './Pages/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Item from './Components/Item'
import Nav from './Components/nav'
import LoginRecruiter from './Pages/LoginRecruiter'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='carrer/job/:id' element={<Item />} />
          <Route path='/carrer/job/apply/:id' element={<Form />} />
          <Route path='/HR/login' element={<LoginRecruiter />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
