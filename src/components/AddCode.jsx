import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { FiPlusCircle} from "react-icons/fi"

import FormikExample from "./AddCode Form"




function AddCodeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} color={useColorModeValue("whiteAlpha.900", "#995414")} bg={useColorModeValue("#995414", "whiteAlpha.900")}>
        <FiPlusCircle />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <FormikExample />

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCodeModal
