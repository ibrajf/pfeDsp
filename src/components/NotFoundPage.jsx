import React from "react"
import { Container, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <Container mt="150px" h="150px" display="flex" flexDir="column" alignItems="center" bgColor="#fffcf4">
      <Box mt={4} mb={1} fontSize="lg" fontWeight="bold">
        404
      </Box>
      <Box maxWidth="sm" fontWeight="bold">
        {" "}
        OUPSSS PAGE NON TROUVER...
      </Box>
      <Box mt="20px" textDecoration="underline">
        <Link to="/">Retourner a l'accueil</Link>
      </Box>
    </Container>
  )
}

export default NotFoundPage
