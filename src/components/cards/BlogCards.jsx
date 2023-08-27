import React from "react"
import { Image, Stack, Heading, Text, Divider, ButtonGroup } from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const BlogCards = ({ id, title, content, image }) => {
  // Limit content to 150 characters with ellipsis at the end
  const truncatedContent = content.length > 250 ? content.slice(0, 250) + "..." : content

  return (
    <>
      <Card maxW="sm" aria-label={`Blog post card for ${title}`}>
        <CardBody>
          <Image src={image} alt={`${title} `} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" aria-label="Blog post title">
              {title}
            </Heading>
            <Text aria-label="Blog post preview content">{truncatedContent}</Text>
          </Stack>
        </CardBody>
        <Divider aria-hidden="true" />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link variant="solid" colorScheme="blue" to={`/blog/detail/${id}`} aria-label={`Read more about ${title}`}>
              Lire la suite
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default BlogCards
