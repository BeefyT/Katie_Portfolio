import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./Pages/AboutMe"
import LandingPage from "./Pages/LandingPage"

const Application: React.FunctionComponent = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Application
