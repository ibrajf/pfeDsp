import React, { useState } from "react"
import { Box, Input, Button, useColorModeValue } from "@chakra-ui/react"
import { user } from "../../services/user"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router"

const CheckCodeForm = () => {
  const [codeInput, setCodeInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showAuth, setShowAuth] = useState(false)
  const navigate = useNavigate()

  const userInfo = jwt_decode(localStorage.token)

  console.log(userInfo)

  const handleInput = e => {
    setCodeInput(e.target.value)
  }

  const handleSubmit = () => {
    if (codeInput === user.code) {
      setShowAuth(true)
    } else {
      setErrorMessage("Code incorrect. Veuillez réessayer.")
    }
  }

  const renderAuthForm = () => navigate("/login")

  const renderCodeForm = () => (
    <>
      <Box display="flex" justifyContent="center">
        <Input placeholder="Code : T8744440" aria-label="Input your code here" mb={4} maxW="300px" onChange={handleInput} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button aria-label="Submit code" colorScheme="blue" size="md" onClick={handleSubmit} width="300px">
          Participer
        </Button>
      </Box>

      {errorMessage && (
        <Box aria-live="polite" display="flex" justifyContent="center">
          {errorMessage}
        </Box>
      )}
    </>
  )

  return (
    <Box p={4} overflow="hidden" alignSelf={"center"} justifySelf={"center"} justifyContent={"center"} display="flex" flexDirection="column" bg={useColorModeValue("#FFFAF0", "gray.900")} w={{ base: "80%", sm: "45%" }} h="92%" ml={{ base: "0", sm: "35%" }} boxShadow={"xl"} borderRadius={10}>
      <Box aria-label="Description text" textAlign="center" m={5}>
        Saisissez l'opportunité de gagner des trésors théinés!
      </Box>

      {!showAuth ? renderCodeForm() : renderAuthForm()}
    </Box>
  )
}

export default CheckCodeForm
