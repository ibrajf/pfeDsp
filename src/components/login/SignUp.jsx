import axios from "axios"
import { useState } from "react"
import { Button, FormControl, FormLabel, Input, Heading, Box } from "@chakra-ui/react"

function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users", formValues)
      .then(response => {
        console.log("User created successfully:", response.data)
        //  logique a faire apres la subbmision du formulaire
      })
      .catch(error => {
        console.error("An error occurred while creating the user:", error)
      })
  }

  return (
    <Box maxWidth="350px" mx="auto" mt="20px">
      <Heading marginBottom="20px">Inscription</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Prénom</FormLabel>
          <Input type="text" placeholder="Entrez votre prénom" onChange={e => setFormValues({ ...formValues, firstName: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Nom</FormLabel>
          <Input type="text" placeholder="Entrez votre nom" onChange={e => setFormValues({ ...formValues, lastName: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Entrez votre email" onChange={e => setFormValues({ ...formValues, email: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password" placeholder="Entrez un mot de passe puissant" onChange={e => setFormValues({ ...formValues, password: e.target.value })} />
        </FormControl>
        <Button my={5} w='100%' type="submit">S'inscrire</Button>
      </form>
    </Box>
  )
}

export default SignUp
