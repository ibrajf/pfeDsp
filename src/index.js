import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/Layout"
import theme from "./theme"

import Blog from "./components/Blog"
import Historique from "./components/Historique"
import Blogdetails from "./components/details/Blogdetails"
import CheckCode from "./components/CheckCode"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Faq from "./components/Faq"
import ContactUs from "./components/ContactUs"
import CookieConsent from "./components/CookieConsent"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/detail/:id" element={<Blogdetails />} />
            <Route path="/" element={<CheckCode />} />
          </Routes>
          <CookieConsent />
        </Layout>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
