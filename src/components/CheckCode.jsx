import { Flex } from "@chakra-ui/react"
import CheckCodeImage from "./CheckCodeImage"
import CheckCodeForm from "./CheckCodeForm"

const CheckCode = () => {
  return (
    <Flex align="center" justify="center" flexDirection={{ base: "column", md: "row" }} maxHeight="100vh" overflow="hidden">
      <CheckCodeImage />
      <CheckCodeForm />
    </Flex>
  )
}

export default CheckCode
