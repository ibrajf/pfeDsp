import React from "react"
import { Image, Stack, Heading, Text, Divider, ButtonGroup } from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const BlogCards = ({ id, title, content, image }) => {
  // Limiter le contenu à 150 caractères avec des points de suspension à la fin
  const truncatedContent = content.length > 250 ? content.slice(0, 250) + "..." : content

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{truncatedContent}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link variant="solid" colorScheme="blue" to={`/blog/detail/${id}`}>
              Lire la suite
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default BlogCards
