import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Link, useDisclosure } from "@chakra-ui/react"

function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box maxWidth="400px" mx="auto" mt="100px">
      <Heading marginBottom="20px">Sign Up</Heading>
      <Button colorScheme="teal" onClick={onOpen}>
        Sign Up
      </Button>
      {isOpen && (
        <form>
          <Stack spacing="20px">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>

            <Button type="submit" colorScheme="teal" onClick={onClose}>
              Submit
            </Button>
          </Stack>
        </form>
      )}
      <Link href="/signin" color="teal.500" mt="20px">
        Already have an account? Sign In
      </Link>
    </Box>
  )
}

export default SignUp
