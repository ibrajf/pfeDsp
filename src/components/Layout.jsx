import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  const location = useLocation()
  const isCheckCodePage = location.pathname === "/"
  return (
    <div>
      {/* Your header component goes here */}
      {/* Content area */}
      {!isCheckCodePage && <Header />}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
