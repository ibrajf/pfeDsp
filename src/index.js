import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import theme from "./theme";

import Historique from "./components/Historique";
import Blogdetails from "./pages/blog/details/Blogdetails";
import Checkcode from "./pages/CheckCode";
import Home from "./pages/Home";
import Faq from "./pages/Faq";

import CookieConsent from "./components/CookieConsent";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/ContactUs";
import Configuration from "./pages/Configuration";
import NotreHistoire from "./components/NotreHistoire";
import PageError from "./pages/PageError";

import { UserProvider } from "./context/UserContext";

import ReactGA from 'react-ga';

const TRACKING_ID = "G-GJM10S52T6"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// Wrap the useEffect hook inside your component
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
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
              <Route path="*" element={<PageError />} />
            </Routes>
            <CookieConsent />
          </Layout>
        </Router>
      </UserProvider>
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
