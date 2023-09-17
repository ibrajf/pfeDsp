import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      aria-label={label} // ARIA label for accessibility
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#FFFAF0", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      role="contentinfo" // ARIA role for footer
    >
      <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"/"} aria-label="Home">
            Acceuil
          </Box>
          <Box as="a" href={"/blog"} aria-label="Blog">
            Blog
          </Box>
          <Box as="a" href={"/Faq"} aria-label="FAQ">
            FAQ
          </Box>
          <Box as="a" href={"/contact"} aria-label="Contact Us">
            Contacter nous
          </Box>
          <Box as="a" href={"/conditionsGenerales"} aria-label="Terms and Conditions">
            Conditions Générales
          </Box>
          <Box as="a" href={"/mentionLegales"} aria-label="Legal Notices">
            Mentions Légales
          </Box>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("#573f25", "gray.700")}>
        <Container as={Stack} maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
          <Text>© 2023 Thétiptop</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"LinkedIn"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
