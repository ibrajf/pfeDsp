import { useEffect, useState } from "react"
import { Flex, Input, Button } from "@chakra-ui/react"
import axios from "axios"
import { FormControl, FormLabel, Heading, Stack, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function UserProfileEdit() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    id: null,
    email: "",
    address: "",
    codes: [],
    firstName: "",
    lastName: "",
    phoneNumber: ""
    // Add any other properties you wish to include
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
      await axios.put("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users/10", userData)
      console.log("Data updated successfully")
    } catch (error) {
      console.error("Error updating data:", error.response.data) // Log full error response
    }
  }
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={4} w={"full"} maxW={"md"} bg={useColorModeValue("white", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input name="firstName" value={userData.firstName || ""} onChange={handleInputChange} placeholder="First Name" />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last name </FormLabel>
          <Input name="lastName" value={userData.lastName || ""} onChange={handleInputChange} placeholder="Last Name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>email</FormLabel>
          <Input name="email" value={userData.email || ""} onChange={handleInputChange} placeholder="Email" />
        </FormControl>

        <FormControl id="address" isRequired>
          <FormLabel>address</FormLabel>
          <Input name="address" value={userData.address || ""} onChange={handleInputChange} placeholder="Address" />
        </FormControl>

        <FormControl id="phoneNumber" isRequired>
          <FormLabel>phoneNumber</FormLabel>
          <Input name="phoneNumber" value={userData.phoneNumber || ""} onChange={handleInputChange} placeholder="Phone Number" />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
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
