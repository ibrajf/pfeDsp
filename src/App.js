import { React } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layout/Layout"
import theme from "./theme"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/blog/Blog"
import Faq from "./pages/Faq"
import Historique from "./components/Historique"
import ContactUs from "./pages/ContactUs"
import Blogdetails from "./pages/blog/details/Blogdetails"
import Checkcode from "./pages/CheckCode"
import Configuration from "./pages/Configuration"
import NotreHistoire from "./components/NotreHistoire"
import PageError from "./pages/PageError"
import CookieConsent from "./components/CookieConsent"
// import Auth from "./context/Auth"
// import { hasAuthenticated } from "./services/AuthApi"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  // const [isAuthenticated, setisAuthenticated] = useState(hasAuthenticated)
  return (
    // <Auth.Provider value={{ isAuthenticated }}>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/home" element={<NotreHistoire />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Checkcode" element={<Checkcode />} />
            <Route path="/login" element={localStorage.getItem("token") ? <Home /> : <SignIn />} />
            <Route path="/signup" element={localStorage.getItem("token") ? <Home /> : <SignUp />} />
            <Route path="/blog/detail/:id" element={<Blogdetails />} />
            <Route path="/historique" element={localStorage.getItem("token") ? <Historique /> : <SignIn />} />
            <Route path="/Configuration" element={localStorage.getItem("token") ? <Configuration /> : <SignIn />} />
            <Route path="*" element={<PageError />} />
          </Routes>
          <CookieConsent />
        </Layout>
      </Router>
    </ChakraProvider>
    // </Auth.Provider>
  )
}

export default App
