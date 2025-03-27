import React from 'react'
import Homepage from './Pages/Homepage'
// import Servicepage from './Pages/Servicepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TermsOfUse from './Pages/TermsOfUse'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import ContactUs from './Pages/ContactUs'


function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="get-in-touch" element={<ContactUs/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App