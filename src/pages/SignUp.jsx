import axios from "axios"
import { useState } from "react"
import { Box, Button, FormControl, FormLabel, Input, Heading, useColorModeValue, useToast, Text } from "@chakra-ui/react"
import bcrypt from "bcryptjs"
import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate()
  const toast = useToast()

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })
  const [errors, setErrors] = useState({})

  const hashPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  const validateForm = () => {
    let formErrors = {}
    if (formValues.firstName.length < 3) formErrors.firstName = "Prénom doit comporter au moins 3 caractères."
    if (formValues.lastName.length < 3) formErrors.lastName = "nom doit comporter au moins 3 caractères."
    if (formValues.password.length < 8) formErrors.password = "Mot de passe doit comporter au moins 8 caractères."
    setErrors(formErrors)
    return Object.keys(formErrors).length === 0 // return true if no errors
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!validateForm()) return

    const hashedPassword = hashPassword(formValues.password)
    const dataToSend = { ...formValues, password: hashedPassword }

    axios
      .post("http://localhost:8000/api/users", dataToSend)
      .then(response => {
        console.log("User created successfully:", response.data)
        toast({
          title: "Compte créé.",
          description: "Bienvenue sur TheTipTop ! Connectez-vous et obtenez votre prix.",
          status: "success",
          duration: 5000,
          isClosable: true
        })
        navigate("/login")
      })
      .catch(error => {
        console.error("An error occurred while creating the user:", error)
        toast({
          title: "Account creation failed.",
          description: "There was an issue creating your account. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right"
        })
      })
  }

  return (
    <Box spacing={4} mx={"auto"} maxW={"500px"} bg={useColorModeValue("#FFFAF0", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
      <Heading marginBottom="20px" textAlign={"center"}>
        Inscription
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.firstName}>
          <FormLabel>Prénom</FormLabel>
          <Input type="text" placeholder="Enter your first name" onChange={e => setFormValues({ ...formValues, firstName: e.target.value })} />
          {errors.firstName && <Text color="red.500">{errors.firstName}</Text>}
        </FormControl>

        <FormControl isInvalid={errors.lastName}>
          <FormLabel>Nom</FormLabel>
          <Input type="text" placeholder="Enter your last name" onChange={e => setFormValues({ ...formValues, lastName: e.target.value })} />
          {errors.lastName && <Text color="red.500">{errors.lastName}</Text>}
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={e => setFormValues({ ...formValues, email: e.target.value })} />
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" placeholder="Enter a strong password" onChange={e => setFormValues({ ...formValues, password: e.target.value })} />
          {errors.password && <Text color="red.500">{errors.password}</Text>}
        </FormControl>

        <Button w={"100%"} mt={"20px"} bg="teal.500" type="submit">
          S'inscrire
        </Button>
      </form>
    </Box>
  )
}

export default SignUp
