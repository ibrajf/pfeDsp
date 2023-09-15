import React from "react"
import { Center } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react"
import historiques from "../services/historique"
import Hero from "./shared/Hero"

const historique = () => {
  return (
    <>
      <div className="faq-header">
        <Hero title="Historique" />
      </div>

      <Center className="faq-container" mt={20} mb="180px">
        <div className="faq-content" style={{ width: "80%", margin: "0 auto" }}>
          {/* Rest of the historique content */}
          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              {/* <TableCaption>Tables des prix</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Code</Th>
                  <Th>Prix gagné</Th>
                </Tr>
              </Thead>
              <Tbody>
                {historiques.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.Date}</Td>
                    <Td>{item.Code}</Td>
                    <Td>{item.Prix}</Td>
                    {/* <Td>
                      <Center>
                        <Button color={useColorModeValue("whiteAlpha.900", "#995414")} bg={useColorModeValue("#995414", "whiteAlpha.900")}>
                          Récupérer le prix
                        </Button>
                      </Center>
                    </Td> */}
                  </Tr>
                ))}
              </Tbody>
              {/* <Tfoot>
                <Tr>
                  <Th>Date</Th>
                  <Th>Code</Th>
                  <Th>Prix gagné</Th>
                </Tr>
              </Tfoot> */}
            </Table>
          </TableContainer>
        </div>
      </Center>
    </>
  )
}

export default historique
