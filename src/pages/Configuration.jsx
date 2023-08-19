import { useState, useEffect } from "react"
import { useUser } from "../context/UserContext"
import { Flex, FormControl, FormLabel, Input, useColorModeValue } from "@chakra-ui/react"

export default function UserProfileEdit() {
  const { user } = useUser() // Accéder aux données de l'utilisateur depuis le contexte
  const [profile, setProfile] = useState({
    userName: user.userName,
    firstName: user.firstName,
    adress: user.adress,
    email: user.email,
    password: user.password // Si vous avez besoin du mot de passe
  })

  useEffect(() => {
    if (user) {
      setProfile({
        userName: user.userName,
        firstName: user.firstName,
        adress: user.adress,
        email: user.email
        // Ajouter d'autres champs si nécessaire
      })
    }
  }, [user])

  const handleChange = e => {
    const { id, value } = e.target
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value
    }))
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      {/* Reste du code */}
      <FormControl id="userName" isRequired>
        <FormLabel>Nom</FormLabel>
        <Input placeholder="Nom" value={profile.userName} onChange={handleChange} type="text" />
      </FormControl>
      {/* Reste des champs */}
    </Flex>
  )
}
