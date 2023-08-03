'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { ReactNode } from 'react'


const SocialButton = ({
  children,
  label,
  href,
}
) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#FFFAF0', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}>
            Home
          </Box>
          <Box as="a" href={'/conditions'}>
            Conditions
          </Box>
          <Box as="a" href={'/blog'}>
            Blog
          </Box>
          <Box as="a" href={'/Faq'}>
            FAQ
          </Box>
          <Box as="a" href={'/contact'}>
            Contacter nous
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('#573f25', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 FuriousDucks</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}