import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Link } from "@chakra-ui/react"
import homeBg from "../../images/homeBg.jpeg"
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker" // Import the analytics hook
import { useNavigate } from "react-router-dom"

export default function WithBackgroundImage() {
  const navigate = useNavigate()
  const trackButtonClick = useAnalyticsEventTracker("Button Click", "Participer Maintenant Click") // Initialize the analytics hook

  const handleButtonClick = () => {
    trackButtonClick("Button Click", "Participer Maintenant Click")

    // Check if the token exists in localStorage and is not empty
    const token = localStorage.getItem("token")
    if (token && token.length > 0) {
      navigate("/checkCode")
    } else {
      navigate("/login")
    }
  }

  return (
    <Flex w={"full"} h={"100vh"} bgImage={`url(${homeBg})`} backgroundSize={"cover"} backgroundPosition={"center center"} aria-label="Background Image">
      <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text color={"white"} fontWeight={700} lineHeight={1.2} align={"center"} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })} aria-label="Promotional Text">
            Jouez pour découvrir des arômes inattendus et des récompenses gourmandes!
          </Text>
          <Stack direction={"row"}>
            <Link>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                onClick={handleButtonClick} // Attach the tracking function to onClick event
                aria-label="Participate Now Button"
              >
                Participer Maintenant !
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
