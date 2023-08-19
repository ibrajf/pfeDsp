import logo from "../../images/logo.png"
import { FiLogOut, FiSettings } from "react-icons/fi"
import { Box, Flex, Avatar, Menu, Button, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center, Image, Link } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import AddCodeModal from "../AddCode"
import Auth from "../../context/Auth"
import { useContext } from "react"

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isAuthenticated } = useContext(Auth)

  return (
    <>
      <Box bg={useColorModeValue("#FFFAF0", "gray.900")} px={5} w="100%">
        <Flex h={99} alignItems={"center"} justifyContent={"space-between"}>
          <Box alt="Composer un code">
            <Stack direction="row">
              {isAuthenticated && (
                <>
                  <AddCodeModal />
                </>
              )}
            </Stack>
          </Box>

          <Box>
            <Link href="/">
              <Image src={`${logo}`} alt="Logo ThéTipTop" w="170px" />
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
              {isAuthenticated && (
                <>
                  <Menu>
                    <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                      <Avatar size={"md"} src={"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar size={"2xl"} src={"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} />
                      </Center>
                      <br />
                      <Center>
                        <p>Username</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <Link href="/Configuration">
                        <MenuItem icon={<FiSettings />}>Configuration </MenuItem>
                      </Link>
                      <MenuItem icon={<FiLogOut />}>Se déconnecter</MenuItem>
                    </MenuList>
                  </Menu>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
