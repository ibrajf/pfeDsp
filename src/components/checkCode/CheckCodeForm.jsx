import React, { useState } from "react"
import logo from "../../images/logo.png"
import { Box, Input, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react"
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
      <Box display="flex" justifyContent="center">
        <Input placeholder="Code : T8744440" mb={4} maxW="300px" onChange={handleInput} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button colorScheme="blue" size="md" onClick={handleSubmit} width="300px">
          Participer
        </Button>
      </Box>

      {errorMessage && (
        <Box display="flex" justifyContent="center">
          {errorMessage}
        </Box>
      )}
    </>
  )

  return (
    <Box p={4} overflow="hidden" alignSelf={'center'} justifySelf={'center'} justifyContent={'center'} display="flex" flexDirection="column" bg={useColorModeValue("#FFFAF0", "gray.900")} w={{ base: "80%", sm: "45%" }} h='92%' ml={{ base: "0", sm: "35%" }} boxShadow={'xl'} borderRadius={10} >
      {/* <Flex justifyContent="center">
        <Box>
          <Image w="75%" src={logo} alt="Logo Thetiptop" />
        </Box>
      </Flex> */}

      <Box textAlign="center" m={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus autem at eius veniam consequuntur facere animi.
      </Box>

      {!showAuth ? renderCodeForm() : renderAuthForm()}
    </Box>
  )
}

export default CheckCodeForm