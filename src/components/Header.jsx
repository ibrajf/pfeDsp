import logo from "./images/logo.png"
import { FiPlusCircle, FiLogOut, FiSettings } from "react-icons/fi"
import { Box, Flex, Avatar, Menu, Button, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center, Image, Link } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import AddCodeModal from "./AddCode"

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue("#FFFAF0", "gray.900")} px={5}>
        <Flex h={99} alignItems={"center"} justifyContent={"space-between"}>
          <Box alt="Composer un code">
            <Stack direction="row">
              <AddCodeModal />
            </Stack>
          </Box>
          <Box>
            <Link href='./historique'><Image src={`${logo}`} alt="Logo ThéTipTop" w="170px" /></Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem icon={<FiSettings />}>Configuration </MenuItem>
                  <MenuItem icon={<FiLogOut />}>Se déconnecter</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
