import React, { useState, useEffect } from "react"
import { Button, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import Cookies from "js-cookie"

function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // If there's no 'cookieConsent' cookie, show the popup
    if (!Cookies.get("cookieConsent")) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Set a cookie here to remember that the user has accepted the terms
    Cookies.set("cookieConsent", "true", { expires: 365 }) // Cookie will expire after 1 year
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered={false}>
      <ModalOverlay />
      <ModalContent
        // Custom CSS to place the Modal at the bottom left of the screen
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          margin: 0,
          width: "auto"
        }}
      >
        <ModalCloseButton />
        <ModalBody>Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.</ModalBody>

        <ModalFooter>
          <Button aria-label="d'accord" colorScheme="blue" mr={3} onClick={handleClose}>
            D'accord
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CookieConsent
