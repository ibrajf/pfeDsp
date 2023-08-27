import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"

function SignIn() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)
  // const [user, setUser] = useState(null)
  const toast = useToast()

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/login", credentials, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        // setUser(response.data) // Mettre à jour le contexte utilisateur avec les données de l'utilisateur
        localStorage.setItem("user", JSON.stringify(response.data))
        localStorage.setItem("token", response.data.token)

        toast({
          title: "Connecté",
          description: "Bonjour, vous êtes connecté à thétiptop",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right"
        })

        navigate("/checkcode")
        window.location.reload() // this will force a page reload, and thus the Routes will re-evaluate.
      })
      .catch(error => {
        console.log(error.response.data)
        setError("Email or password is incorrect") // Vous pouvez personnaliser ce message d'erreur
      })
  }

  return (
    <Box spacing={4} mx={"auto"} maxW={"500px"} bg={useColorModeValue("#FFFAF0", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
      <Heading marginBottom="20px" textAlign={"center"}>
        Connexion
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing="20px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
          </FormControl>
          <FormControl>
            <FormLabel>Mot de passe</FormLabel>
            <Input type="password" placeholder="Enter your password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>} {/* Afficher l'erreur si elle existe */}
          <Button type="submit" colorScheme="teal">
            Se connecter
          </Button>
          <Button leftIcon={<FcGoogle />} variant="outline" colorScheme="teal">
            Se connecter avec Gmail
          </Button>
        </Stack>
      </form>
      <Link href="/signup" color="teal.500" mt="20px">
        Vous n'avez pas de compte? Inscrivez-vous !
      </Link>
    </Box>
  )
}

export default SignIn
