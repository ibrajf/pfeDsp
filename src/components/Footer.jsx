import { Box, Container, Stack, Text, Link, useColorModeValue } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box bg={useColorModeValue("#FFFAF0", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contitions"}>Conditions</Link>
          <Link href={"/contact"}>Quelques chose ne fonctionne pas ?</Link>
          <Link href={"/faq"}>FAQ</Link>
        </Stack>
        <Text>© 2023 FuriousDucks</Text>
      </Container>
    </Box>
  )
}

export default Footer
