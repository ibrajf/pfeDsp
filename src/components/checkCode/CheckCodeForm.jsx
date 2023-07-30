import { React, useState } from "react"
import logo from "../../images/logo.png"
import { Box, Image, Input, Button, Flex } from "@chakra-ui/react"
import { user } from "../../services/user"
// import { useNavigate } from "react-router-dom"
import SignIn from "../login/SignIn"
import SignUp from "../login/SignUp"

function CheckCodeForm() {
  // const navigate = useNavigate()

  const [codeInput, setCodeInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showAuth, setShowAuth] = useState(false)

  const handlesubmit = () => {
    if (codeInput === user.code) {
      // navigate("/historique")
      setShowAuth(true) // Show the auth components
    } else {
      setErrorMessage("Code incorrect. Veuillez réessayer.")
    }
  }

  return (
    <Box flex="1" p={4} display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" overflow="hidden">
      <Box mt="auto" mb={4} textAlign="center">
        <Image src={logo} h={100} w="100%" alt="Logo Thetiptop" />
      </Box>
      <Box textAlign="center" mb={4}>
        FROM LOCAL Second time
      </Box>
      {!showAuth ? (
        <>
          <Input placeholder="Enter your code" mb={4} maxW="150px" onChange={e => setCodeInput(e.target.value)} />
          <Button colorScheme="blue" size="md" onClick={handlesubmit}>
            Participer
          </Button>
          {errorMessage && <Box>{errorMessage}</Box>}
        </>
      ) : (
        <Flex direction={{ base: "column", sm: "row" }} spacing={{ base: "4", sm: "8" }} w="100%">
          <SignIn />
          <SignUp />
        </Flex>
      )}
    </Box>
  )
}

export default CheckCodeForm
