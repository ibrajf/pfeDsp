import React, { createContext, useContext, useState } from "react"

export const UserContext = createContext()

export const useUser = () => {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null) // null signifie utilisateur non connecté

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
