import { Flex } from "@chakra-ui/react"
import checkcodeImage from "../images/checkCode.jpg"
import CheckCodeForm from "../components/checkCode/CheckCodeForm"
import { Helmet } from "react-helmet" // Importer Helmet pour gérer les balises <head>

const CheckCode = () => {
  return (
    <>
      <Helmet>
        <title>Participation - Thé Tip Top</title>
        <meta name="description" content="check ton code gagnant" />
      </Helmet>
      <Flex bgImage={`url(${checkcodeImage})`} bgSize="cover" height="85vh" display="flex" justifyContent="center" aria-label="check code ">
        <CheckCodeForm />
      </Flex>
    </>
  )
}

export default CheckCode
