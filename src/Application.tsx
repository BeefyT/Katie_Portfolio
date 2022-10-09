import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./Pages/AboutMe"
import LandingPage from "./Pages/LandingPage"
import Portfolio from "./Pages/Portfolio"

const Application: React.FunctionComponent = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
  )
}
export default Application
