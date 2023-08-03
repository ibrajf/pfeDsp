import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layout/Layout"
import theme from "./theme"

import Historique from "./components/Historique"
import Blogdetails from "./pages/blog/details/Blogdetails"
import Checkcode from "./pages/CheckCode"
import Home from "./pages/Home"
// import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Faq from "./pages/Faq"

import CookieConsent from "./components/CookieConsent"
import Blog from "./pages/blog/Blog"
import ContactUs from "./pages/ContactUs"
import Configuration from "./pages/Configuration"
import NotreHistoire from "./components/NotreHistoire"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/home" element={<NotreHistoire />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/detail/:id" element={<Blogdetails />} />
            <Route path="/Checkcode" element={<Checkcode />} />
            <Route path="/Configuration" element={<Configuration />} />
          </Routes>
          <CookieConsent />
        </Layout>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// reportWebVitals()
