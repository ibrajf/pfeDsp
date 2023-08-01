import logo from "../../images/logo.png"
import { Box, Image, Flex } from "@chakra-ui/react"
import React from "react"

const CheckCodeImage = () => {
  return (
    <Flex>
      <Box>
        <Image src={logo} alt="Logo Thetiptop" />
      </Box>
    </Flex>
  )
}

export default CheckCodeImage
