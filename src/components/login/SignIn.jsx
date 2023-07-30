import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"

function SignIn() {
  return (
    <Box maxWidth="400px" mx="auto" mt="20px">
      <Heading marginBottom="20px">Sign In</Heading>
      <form>
        <Stack spacing="20px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Sign In
          </Button>

          <Button leftIcon={<FcGoogle />} variant="outline" colorScheme="teal">
            Sign In with Gmail
          </Button>
        </Stack>
      </form>
      <Link href="/signup" color="teal.500" mt="20px">
        Don't have an account? Sign Up
      </Link>
    </Box>
  )
}

export default SignIn
