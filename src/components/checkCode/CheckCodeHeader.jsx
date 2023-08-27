import logo from "../../images/logo.png"
import { Box, Flex, Button, useColorModeValue, Stack, useColorMode, Image, Link } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export default function CheckcodeNav() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue("#FFFAF0", "gray.900")} px={5} w="100%" aria-label="Navigation bar">
        <Flex h={99} alignItems={"center"} justifyContent={"space-between"}>
          <Box>{/* Empty box */}</Box>
          <Box>
            <Link href="/">
              <Image src={`${logo}`} alt="Logo ThéTipTop" w="170px" />
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} aria-label={`Toggle to ${colorMode === "light" ? "dark" : "light"} mode`}>
                {colorMode === "light" ? <MoonIcon aria-hidden="true" /> : <SunIcon aria-hidden="true" />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
