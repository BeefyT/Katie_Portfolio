import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./Pages/AboutMe"
import LandingPage from "./Pages/LandingPage"
import Portfolio from "./Pages/Portfolio"
import ScrollToTop from "./hooks/ScrollToTop"
import ContactMe from "./Pages/ContactMe"


const Application: React.FunctionComponent = (props) => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<ContactMe />} />

      </Routes>
    </BrowserRouter>
  )
}
export default Application
