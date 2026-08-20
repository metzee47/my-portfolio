import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { contactLink, expertiseLink, homeLink, projectLink } from './links'
import { FallbackLoader } from '@/components/FallbackLoader'

// Lazy import des pages
const Home = lazy(() => import('@/pages/Home'))
const Project = lazy(() => import('@/pages/Project'))
const Contact = lazy(() => import('@/pages/Contact'))
const Expertise = lazy(() => import('@/pages/Expertise'))

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<FallbackLoader/>}>
        <Routes>
          <Route path={homeLink} element={<Home />} />
          <Route path={projectLink} element={<Project />} />
          <Route path={contactLink} element={<Contact />} />
          <Route path={expertiseLink} element={<Expertise />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
