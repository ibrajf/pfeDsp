import logo from "../../images/logo.png"
import { FiLogOut, FiSettings, FiBookOpen } from "react-icons/fi"
import { Box, Flex, Avatar, Menu, Button, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center, Image, Link } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import AddCodeModal from "../AddCode"
import { useNavigate } from "react-router"
import { useToast } from "@chakra-ui/react"
import jwt_decode from "jwt-decode";


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  const toast = useToast()



  const signOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast({
      title: "Goodbye!",
      description: "See you again.",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top-right"
    })
    window.location.reload()
    navigate("/")
  }





  return (
    <>
      <Box bg={useColorModeValue("#FFFAF0", "gray.900")} px={5} w="100%">
        <Flex h={99} alignItems={"center"} justifyContent={"space-between"}>
          <Box aria-label="Compose a code" alt="Compose a code">
            <Stack direction="row">{localStorage.getItem("token") ? <AddCodeModal /> : ""}</Stack>
          </Box>
          <Box>
            <Link href="/" aria-label="Home">
              <Image src={`${logo}`} alt="Logo ThéTipTop" w="170px" />
            </Link>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} aria-label="Toggle color mode">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {localStorage.getItem("token") ? (
                <>
                  <Menu>
                    <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0} aria-label="User settings">
                      <Avatar size={"md"} src={"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt="User avatar" />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar size={"2xl"} src={"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt="User avatar" />
                      </Center>
                      <br />
                      <Center>
                        <p>Mon Profil </p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <Link href="/Historique">
                        <MenuItem icon={<FiBookOpen />} aria-label="Historique">
                          Historique
                        </MenuItem>
                      </Link>
                      <Link href="/Configuration">
                        <MenuItem icon={<FiSettings />} aria-label="Configuration">
                          Configuration
                        </MenuItem>
                      </Link>
                      <MenuItem icon={<FiLogOut />} onClick={() => signOut()} aria-label="Sign out">
                        Se déconnecter
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                ""
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
