import { useEffect, useState } from "react"
import { Flex, Input, Button, FormControl, FormLabel, Heading, Stack, useColorModeValue, Text } from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"
import jwt_decode from "jwt-decode"

export default function UserProfileEdit() {
  const toast = useToast()
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: ""
  })

  const token = localStorage.getItem("token")
  const userId = jwt_decode(token)
  useEffect(() => {
    const fetchData = async () => {
      if (token && userId) {
        try {
          const response = await axios.get(`https://api.dsp-archiwebo21a-ij-wd-ma.fr/api/users/${userId.id}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          setUserData(response.data)

          console.log(response.data)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      } else {
        console.log("No token or user ID found")
      }
    }
    fetchData()
  }, [])

  const handleInputChange = event => {
    const { name, value } = event.target
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCancel = () => {
    navigate("/historique")
  }

  const handleSubmit = async () => {
    try {
      await axios
        .put(`https://api.dsp-archiwebo21a-ij-wd-ma.fr/api/users/${userId.id}`, userData, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
          window.location.reload()
          toast({
            title: "Modification",
            description: "Votre profil est bien modifié",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right"
          })
        })
    } catch (error) {
      console.error("Error updating data:", error.response.data)
    }
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={4} w={"full"} maxW={"md"} bg={useColorModeValue("white", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>

        <FormControl id="email" isRequired>
          <FormLabel aria-label="User Email">Email</FormLabel>
          <Text>{userData.email || ""}</Text>
        </FormControl>

        <FormControl id="userName" isRequired>
          <FormLabel aria-label="User First Name">User name</FormLabel>
          <Input aria-label="First Name Input" name="firstName" value={userData.firstName || ""} onChange={handleInputChange} placeholder="First Name" />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel aria-label="User Last Name">Last name</FormLabel>
          <Input aria-label="Last Name Input" name="lastName" value={userData.lastName || ""} onChange={handleInputChange} placeholder="Last Name" />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            aria-label="Cancel Button"
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500"
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            aria-label="Submit Button"
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500"
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
