import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Link, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"

function SignIn() {
  const navigate = useNavigate()
  const { setUser } = useUser() // Utilisation du contexte utilisateur
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users", credentials)
      .then(response => {
        setUser(response.data) // Mettre à jour le contexte utilisateur avec les données de l'utilisateur
        navigate("/Configuration") // Rediriger vers la page de configuration
      })
      .catch(error => {
        console.log(error.response.data)
        setError("Email or password is incorrect") // Vous pouvez personnaliser ce message d'erreur
      })
  }

  return (
    <Box maxWidth="400px" mx="auto" mt="20px">
      <Heading marginBottom="20px">Sign In</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing="20px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>} {/* Afficher l'erreur si elle existe */}
          <Button type="submit" colorScheme="teal">
            Sign In
          </Button>
          <Button leftIcon={<FcGoogle />} variant="outline" colorScheme="teal">
            Sign In with Gmail
          </Button>
        </Stack>
      </form>
      <Link href="/signup" color="teal.500" mt="20px">
        Don't have an account? Sign Up
      </Link>
    </Box>
  )
}

export default SignIn