import React from "react"
import { useContext } from "react"
import Auth from "../context/Auth"
import { Navigate, Route } from "react-router-dom"

const AuthenticatedRoute = props => {
  const { isAuthenticated } = useContext(Auth)

  if (isAuthenticated) {
    return <Route {...props} />
  }

  return <Navigate to="/CheckCode" replace />
}

export default AuthenticatedRoute
