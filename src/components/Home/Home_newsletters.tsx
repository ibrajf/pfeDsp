import React, { useState } from "react"
import axios from "axios"
import { Stack, FormControl, Input, Button, useColorModeValue, Heading, Text, Container, Flex } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"

export default function Simple() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("initial")
  const [error, setError] = useState(false)

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = e => {
    e.preventDefault() // Empêche le comportement par défaut de rechargement de la page
    setError(false) // Réinitialise l'état d'erreur
    setState("submitting") // Change l'état pour indiquer que la soumission est en cours

    // Envoi d'une requête POST à l'API avec l'adresse email
    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/newsletters", {
        email: email
      })
      .then(() => {
        setState("success") // Change l'état pour indiquer que la soumission a réussi
      })
      .catch(() => {
        setError(true) // Change l'état d'erreur si la requête échoue
        setState("initial") // Réinitialise l'état de soumission
      })
  }
  return (
    <Flex minH={"50vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.90", "gray.800")}>
      <Container maxW={"lg"} bg={useColorModeValue("white", "whiteAlpha.100")} boxShadow={"xl"} rounded={"lg"} p={6}>
        <Heading as={"h2"} fontSize={{ base: "xl", sm: "2xl" }} textAlign={"center"} mb={5}>
          Abonnez vous à la Newsletters
        </Heading>
        {/* Le formulaire avec gestionnaire de soumission */}
        <Stack direction={{ base: "column", md: "row" }} as={"form"} spacing={"12px"} onSubmit={handleSubmit}>
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{ color: "gray.400" }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Votre mail"}
              aria-label={"Votre mail"}
              value={email}
              // Désactive l'entrée si l'état n'est pas "initial" (partie du changement)
              disabled={state !== "initial"}
              onChange={e => setEmail(e.target.value)} // Gère le changement de la valeur de l'e-mail
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              // Changement de couleur en fonction de l'état (partie du changement)
              colorScheme={state === "success" ? "green" : "blue"}
              // Affiche un indicateur de chargement si l'état est "submitting" (partie du changement)
              isLoading={state === "submitting"}
              w="100%"
              // Change le type de bouton en fonction de l'état (partie du changement)
              type={state === "success" ? "button" : "submit"}
            >
              {/* Change le contenu du bouton en fonction de l'état (partie du changement) */}
              {state === "success" ? <CheckIcon /> : "Envoyer"}
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign={"center"} color={error ? "red.500" : "gray.500"}>
          {/* Affiche un message différent en fonction de l'état d'erreur (partie du changement) */}
          {error ? "Un erreur est apparu 😢 Essayez ultérierement " : "Recevez toutes les nouvelles de votre magasin préféré du thé."}
        </Text>
      </Container>
    </Flex>
  )
}
