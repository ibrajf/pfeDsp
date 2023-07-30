import React from "react"
import { Center, Box } from "@chakra-ui/react"
import { Accordion } from "@chakra-ui/react"
import accordions from "../services/faq"
import AccordionItems from "../components/accordions/AccordionItems"
import Hero from "../components/shared/Hero"

const Faq = () => {
  return (
    <>
      <div className="faq-header">
        <Hero title="FAQ" />
      </div>

      <Center className="faq-container" mt={20} mb="180px">
        <div className="faq-content" style={{ width: "80%", margin: "0 auto" }}>
          {/* Rest of the FAQ content */}
          <Accordion defaultIndex={[0]}>
            {accordions.map((item, index) => (
              <Box key={index}>
                {" "}
                <AccordionItems question={item.question} answer={item.answer} />
              </Box>
            ))}
          </Accordion>
        </div>
      </Center>
    </>
  )
}

export default Faq
