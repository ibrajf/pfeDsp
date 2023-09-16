import jwt_decode from "jwt-decode";
import axios from "axios";
import React, { useState , useEffect } from "react";
import { Center, Button, useColorModeValue } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import Hero from "./shared/Hero";
const Historique = () => {

  const [historiques, setHistoriques] = useState([]);
  const token = localStorage.getItem('token');
  const userInfo = jwt_decode(token);

  const requestData = {
    customer_id: userInfo.username,
    id : userInfo.id
  };

  useEffect(() => {
    axios.get("https://api.dsp-archiwebo21a-ij-wd-ma.fr/api/codes", {
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      console.log(response.data)
      
      const filteredData = [];

      response.data.forEach(item => {
        if (!item.customer) return;
    
        const customerId = parseInt(item.customer.split('/')[3]);
        console.log('id  ' , parseInt(item.customer.split('/')[3]))
        console.log('token  ' , requestData.id);
        if (customerId === requestData.id) {
          
          filteredData.push(item);
        }
      });
    
      setHistoriques(filteredData);
      console.log(filteredData)
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
    
  }, []); // Empty dependency array means this useEffect runs once when the component mounts
  
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
                    <Td>{item && item.date_attribue ? item.date_attribue.split("T")[0] : "N/A"}</Td>
                  
                    <Td>{item.code}</Td>
                    <Td>{item.prize}</Td>
                    <Td> Utilisé </Td>
                    <Td>
                      <Center>
                        <Button color={useColorModeValue("whiteAlpha.900", "#995414")} bg={useColorModeValue("#995414", "whiteAlpha.900")}>
                          Récupérer le prix
                        </Button>
                      </Center>
                    </Td>
                  </Tr>
                ))}
              </Tbody>

            </Table>
          </TableContainer>
        </div>
      </Center>
    </>
  )
}

export default Historique
