import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import LoginPage from './LoginPage';
import Register from './Register';

function App() {
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
