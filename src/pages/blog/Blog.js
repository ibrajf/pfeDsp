import React from "react"
import { Center, Box, SimpleGrid } from "@chakra-ui/react"
// import Header from "./Header"
import "../../App.css" // Import the CSS file for BlogPage
import articles from "../../services/articles"
import BlogCards from "../../components/cards/BlogCards"
import Hero from "../../components/shared/Hero"

const Blog = () => {
  return (
    <div>
      {/* Header section with the Navbar */}

      {/* Blog Header */}
      <div className="blog-header">
        <Hero title="Blog" />
      </div>

      {/* Rest of the blog content */}
      <div className="blog-content">
        {/* Your blog content goes here */}
        <Center>
          <SimpleGrid mt="50px" columns={[1, 1, 3]} spacing={4}>
            {articles.map(item => {
              return (
                <Box key={item.id}>
                  {" "}
                  <BlogCards id={item.id} title={item.title} content={item.content} image={item.image} />
                </Box>
              )
            })}
          </SimpleGrid>
        </Center>
      </div>
    </div>
  )
}

export default Blog
