import React from "react"
import { Center, Box, Text, Image } from "@chakra-ui/react"
import Hero from "./shared/Hero"
// import Header from "./Header"

const BlogDetail = ({ title, content, image }) => {
  return (
    <>
      <div className="blogDetails-header">
        <Hero title={title} />
      </div>

      <Center className="blog-content" mt={10}>
        <Box maxW="1400px" borderWidth="1px" p={4} borderRadius="md">
          <Center>
            <Image src={image} alt="Blog Image" />
          </Center>
          <Text textAlign="justify" mt={4}>
            {content}
          </Text>
        </Box>
      </Center>
    </>
  )
}

export default BlogDetail
