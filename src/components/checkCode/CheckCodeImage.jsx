import image from "../../images/image.png"
import { Box } from "@chakra-ui/react"
import React from "react"

const CheckCodeImage = () => {
  return <Box flex="1" h="100vh" w="100%" bgImage={`url(${image})`} bgSize="cover" bgPosition="center" overflow="hidden"></Box>
}

export default CheckCodeImage
