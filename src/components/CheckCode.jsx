import { Flex } from "@chakra-ui/react"
import CheckCodeImage from "./CheckCodeImage"
import CheckCodeForm from "./CheckCodeForm"

const CheckCode = () => {
  return (
<<<<<<< HEAD
    <Flex align="center" justify="center" flexDirection={{ base: "column", md: "row" }} minHeight="100vh" overflow="hidden">
      <Box flex="1" h="100vh" w="100%" bgImage={`url(${image})`} bgSize="cover" bgPosition="center" overflow="hidden">
        {/* Vous pouvez également ajouter du contenu ici si nécessaire */}
      </Box>
      <Box
        flex="1"
        p={4}
        // bg="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
      >
        <Box mt="auto" mb={4} textAlign="center">
          <Image src={logo} h={100} w="100%" alt="Logo Thetiptop" />
        </Box>
        <Box textAlign="center" mb={4}>
          FROM LOCAL Second time eeeeeeeeeeeee
        </Box>
        <Input placeholder="Enter your code" mb={4} maxW="150px" onChange={e => setCodeInput(e.target.value)} />
        <Button colorScheme="blue" size="md" onClick={handlesubmit}>
          Participer
        </Button>
        {errorMessage && <Box>{errorMessage}</Box>}
        <Box> {user.code} </Box>
      </Box>
=======
    <Flex align="center" justify="center" flexDirection={{ base: "column", md: "row" }} maxHeight="100vh" overflow="hidden">
      <CheckCodeImage />
      <CheckCodeForm />
>>>>>>> 2e7298167f8c7a8c8882d6ad3ec041501388ac45
    </Flex>
  )
}

export default CheckCode
