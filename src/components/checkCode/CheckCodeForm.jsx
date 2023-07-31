import React, { useState } from "react"
import logo from "../../images/logo.png"
import { Box, Input, Button, Flex, Image } from "@chakra-ui/react"
import { user } from "../../services/user"
import SignIn from "../login/SignIn"
import SignUp from "../login/SignUp"

const CheckCodeForm = () => {
  const [codeInput, setCodeInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showAuth, setShowAuth] = useState(false)

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

  const renderAuthForm = () => (
    <Flex direction={{ base: "column", sm: "row" }} spacing={{ base: "4", sm: "8" }} w="100%">
      <SignIn />
      <SignUp />
    </Flex>
  )

  const renderCodeForm = () => (
    <>
      <Input placeholder="Enter your code" mb={4} maxW="150px" onChange={handleInput} />
      <Button colorScheme="blue" size="md" onClick={handleSubmit}>
        Participer
      </Button>
      {errorMessage && <Box>{errorMessage}</Box>}
    </>
  )

  return (
    <Box p={4} overflow="hidden" display="flex" flexDirection="column">
      <Flex>
        <Box>
          <Image src={logo} alt="Logo Thetiptop" />
        </Box>
      </Flex>

      <Box textAlign="center" mb={4}>
        FROM LOCAL Second time
      </Box>

      {!showAuth ? renderCodeForm() : renderAuthForm()}
    </Box>
  )
}

export default CheckCodeForm
