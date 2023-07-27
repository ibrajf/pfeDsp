import logo from "./images/logo.png"
import { Link, Image, Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react"
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from "react-icons/md"
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs"

export default function ContactUs() {
  return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box bg="#fffaf0" color="black" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box>
                    <Link href="./historique">
                      <Image src={`${logo}`} alt="Logo ThéTipTop" w="150px" />
                    </Link>
                  </Box>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Envoyer votre message a notre support :
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button size="md" height="48px" width="200px" variant="ghost" color="black" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdPhone color="#437d35" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button size="md" height="48px" width="200px" variant="ghost" color="black" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdEmail color="#437d35" size="20px" />}>
                        hello@abc.com
                      </Button>
                      <Button size="md" height="48px" width="200px" variant="ghost" color="black" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdLocationOn color="#437d35" size="20px" />}>
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                    <IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true} _hover={{ bg: "#437d35" }} icon={<MdFacebook size="28px" />} />
                    <IconButton aria-label="github" variant="ghost" size="lg" isRound={true} _hover={{ bg: "#437d35" }} icon={<BsGithub size="28px" />} />
                    <IconButton aria-label="discord" variant="ghost" size="lg" isRound={true} _hover={{ bg: "#437d35" }} icon={<BsDiscord size="28px" />} />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nom & Prénom</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" placeholder="Votre nom ou prénom" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" placeholder="Votre email" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300"
                          }}
                          placeholder="votre message .. "
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#437d35" color="white" _hover={{}}>
                          Envoyer
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
