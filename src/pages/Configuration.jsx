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
    const fetchData = async () => {
      try {
        const response = await axios.get("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users/10")
        setUserData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
  }, [user])

  const handleChange = e => {
    const { id, value } = e.target
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value
    }))
  }

  const handleCancel = () => {
    navigate("/historique")
  }

  const handleSubmit = async () => {
    try {
      await axios.put("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users/10", userData)
      console.log("Data updated successfully")
    } catch (error) {
      console.error("Error updating data:", error.response.data) // Log full error response
    }
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
