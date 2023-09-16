import { Link, useDisclosure, Button, useColorModeValue } from "@chakra-ui/react"
import { FiPlusCircle } from "react-icons/fi"


function AddCodeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Link href="/checkCode" aria-label="Home">
        <Button color={useColorModeValue("whiteAlpha.900", "#995414")} bg={useColorModeValue("#995414", "whiteAlpha.900")}>
          <FiPlusCircle />
        </Button>  
      </Link>

      
    </>
  )
}

export default AddCodeModal
