import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react"

export const AccordionItems = ({ question, answer }) => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton aria-label={`Toggle information for ${question}`}>
            <Box as="span" flex="1" textAlign="left">
              {question}
            </Box>
            <AccordionIcon aria-hidden="true" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{answer}</AccordionPanel>
      </AccordionItem>
    </>
  )
}

export default AccordionItems
