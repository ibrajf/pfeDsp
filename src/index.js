import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import { UserProvider } from "././context/UserContext"
import App from "./App.js"

ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
)

// reportWebVitals()
