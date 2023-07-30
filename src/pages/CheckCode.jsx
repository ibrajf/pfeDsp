import { Flex } from "@chakra-ui/react"
import CheckCodeImage from "../components/checkCode/CheckCodeImage"
import CheckCodeForm from "../components/checkCode/CheckCodeForm"

const CheckCode = () => {
  return (
    <Flex align="center" justify="center" flexDirection={{ base: "column", md: "row" }} maxHeight="calc(100vh - 60px)" overflow="hidden">
      <CheckCodeImage />
      <CheckCodeForm />
    </Flex>
  )
}

export default CheckCode
