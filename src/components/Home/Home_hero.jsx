import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Link } from '@chakra-ui/react'
import homeBg from "../../images/homeBg.jpeg"
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker'; // Import the hook

export default function WithBackgroundImage() {

  const trackButtonClick = useAnalyticsEventTracker("Button Click", "Participer Maintenant Click"); // Initialize the hook

  const handleButtonClick = () => {
    trackButtonClick("Button Click", "Participer Maintenant Click"); // Track the event
    // Any other logic you want to execute on button click
  };

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      bgImage={`url(${homeBg})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            align={'center'}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Jouez pour découvrir des arômes inattendus et des récompenses gourmandes! tester auto pull from ibrahim 1
          </Text>
          <Stack direction={'row'}>
            <Link href='/checkcode'>
            <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                onClick={handleButtonClick} // Attach the tracking function to onClick event
              >
                Particper Maintenant !
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}