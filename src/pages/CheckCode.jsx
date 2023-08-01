import { Flex } from "@chakra-ui/react"
import checkcodeImage from "../images/checkCode.jpg"
// import CheckCodeImage from "../components/checkCode/CheckCodeImage"
import CheckCodeForm from "../components/checkCode/CheckCodeForm"

const CheckCode = () => {
  return (
    <Flex bgImage={`url(${checkcodeImage})`} bgSize="cover" height="85vh" display="flex" justifyContent="center">
      <CheckCodeForm />
    </Flex>
  )
}

export default CheckCode
