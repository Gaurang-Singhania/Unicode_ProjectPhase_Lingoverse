import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';
import JoinCommunities from './pages/JoinCommunities';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/joincommunities" element={<JoinCommunities />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
