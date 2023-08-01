import { useLocation } from "react-router-dom"
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import { Grid, GridItem, Flex, Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  const location = useLocation()
  const isCheckCodePage = location.pathname === "/" // Set this to true or false based on your page check logic

  return (
    <Grid
      templateAreas={`"header header"
                    "main main"
                    "footer footer"`}
      gridTemplateRows={"70px 1fr auto"} // Adjusted grid rows to include sticky footer
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="0"
      color="blackAlpha.700"
    >
      {/* Header (conditionally rendered) */}
      {isCheckCodePage ? (
        <GridItem bg="orange.300" area={"header"}>
          <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
            <Box>This is the alternative content</Box>
          </Flex>
        </GridItem>
      ) : (
        <GridItem bg="orange.300" area={"header"}>
          <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
            <Header />
          </Flex>
        </GridItem>
      )}

      {/* Main */}
      <GridItem area={"main"}>
        <main>{children}</main>
      </GridItem>

      {/* Footer */}
      <GridItem bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default Layout
