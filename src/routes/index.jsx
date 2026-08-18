import Contact from '@/pages/Contact'
import Expertise from '@/pages/Expertise'
import Home from '@/pages/Home'
import Project from '@/pages/Project'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/experiences-and-formations" element={<Expertise/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes