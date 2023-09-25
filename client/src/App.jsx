import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import LoginPage from './components/LoginPage/LoginPage';
import Register from './components/Register/Register';
import Logged from './components/Logged/Logged';

function App() {
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/logged' element={<Logged />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
