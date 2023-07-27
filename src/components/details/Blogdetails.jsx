import React from "react"
import { useParams } from "react-router-dom"
import articles from "../../services/articles"
import BlogDetail from "../BlogDetail"
import { Box } from "@chakra-ui/react"

const Blogdetails = () => {
  const { id } = useParams()
  return (
    <Box key={id}>
      {articles.map(item => {
        if (JSON.stringify(item.id) === id) {
          return <BlogDetail title={item.title} image={item.image} content={item.content} />
        }
      })}
    </Box>
  )
}

export default Blogdetails
