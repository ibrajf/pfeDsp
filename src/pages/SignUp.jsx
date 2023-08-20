import axios from "axios"
import { useState } from "react"
import { Box, Button, FormControl, FormLabel, Input, Heading, useColorModeValue } from "@chakra-ui/react"
import bcrypt from "bcryptjs"

function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const hashPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Hash the password with bcrypt
    const hashedPassword = hashPassword(formValues.password)

    // Replace the plain password with the hashed one
    const dataToSend = { ...formValues, password: hashedPassword }

    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users", dataToSend)
      .then(response => {
        console.log("User created successfully:", response.data)
      })
      .catch(error => {
        console.error("An error occurred while creating the user:", error)
      })
  }

  return (
    <Box spacing={4} mx={"auto"} maxW={"500px"} bg={useColorModeValue("#FFFAF0", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
      <Heading marginBottom="20px" textAlign={"center"}>Inscription</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Prénom</FormLabel>
          <Input type="text" placeholder="Enter your first name" onChange={e => setFormValues({ ...formValues, firstName: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Nom</FormLabel>
          <Input type="text" placeholder="Enter your last name" onChange={e => setFormValues({ ...formValues, lastName: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={e => setFormValues({ ...formValues, email: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" placeholder="Enter a strong password" onChange={e => setFormValues({ ...formValues, password: e.target.value })} />
        </FormControl>
        <Button w={"100%"} mt={"20px"} bg="teal.500" type="submit">S'inscrire</Button>
      </form>
    </Box>
  )
}

export default SignUp
