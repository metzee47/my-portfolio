import Contact from '@/pages/Contact'
import Expertise from '@/pages/Expertise'
import Home from '@/pages/Home'
import Project from '@/pages/Project'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { contactLink, expertiseLink, homeLink, projectLink } from './links'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={homeLink} element={<Home/>} />
        <Route path={projectLink} element={<Project/>} />
        <Route path={contactLink} element={<Contact/>} />
        <Route path={expertiseLink} element={<Expertise/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes