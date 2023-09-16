import React, { useState, useEffect } from 'react';
import { Box, Input, Button, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";

const CheckCodeForm = () => {
  const [codeInput, setCodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();


  // Récupération des informations de l'utilisateur depuis le JWT
  const token = localStorage.getItem('token');
  const userInfo = jwt_decode(token);

  const handleInput = (e) => {
    setCodeInput(e.target.value);
  };

  const handleSubmit = () => {

    const requestData = {
      code: codeInput,
      customer_id: userInfo.username,
      id : userInfo.id
    };

    console.log(requestData.customer_id);
    console.log(requestData.code);
    console.log(requestData.id);
  
    axios
      .post(
        `https://api.dsp-archiwebo21a-ij-wd-ma.fr/api/codes/validation`, 
        {
          "email":  requestData.customer_id,
          "code" :requestData.code
     },
        {
          headers: {
            "accept": "application/json", 
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setShowAuth(true);
        navigate('/historique');
      })
      .catch((error) => {
        setErrorMessage('Code incorrect. Veuillez réessayer.');
      });
  };
  

  return (
    <Box 
      p={4} 
      overflow="hidden" 
      alignSelf={"center"} 
      justifySelf={"center"} 
      justifyContent={"center"} 
      display="flex" 
      flexDirection="column" 
      bg={useColorModeValue("#FFFAF0", "gray.900")} 
      w={{ base: "80%", sm: "45%" }} 
      h="92%" 
      ml={{ base: "0", sm: "35%" }} 
      boxShadow={"xl"} 
      borderRadius={10}
    >
      <Box 
        aria-label="Description text" 
        textAlign="center" 
        m={5}
      >
        Saisissez l'opportunité de gagner des trésors théinés!
      </Box>

      {!showAuth ? (
        <>
          <Box display="flex" justifyContent="center">
            <Input 
              placeholder="Code : T8744440" 
              aria-label="Input your code here" 
              mb={4} 
              maxW="300px" 
              onChange={handleInput} 
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button 
              aria-label="Submit code" 
              colorScheme="blue" 
              size="md" 
              onClick={handleSubmit} 
              width="300px"
            >
              Participer
            </Button>
          </Box>
        </>
      ) : (
        // Vous pouvez ajouter ce qui doit être affiché lorsque showAuth est vrai
        console.log("yes")
      )}

      {errorMessage && (
        <Box 
          aria-live="polite" 
          display="flex" 
          justifyContent="center"
        >
          {errorMessage}
        </Box>
      )}
    </Box>
  );
};

export default CheckCodeForm;
