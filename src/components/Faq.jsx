import React from "react"
import { Center, Box, SimpleGrid } from "@chakra-ui/react"
import { Accordion } from "@chakra-ui/react"
import accordions from "../services/faq"
import AccordionItems from "./accordions/AccordionItems"
import Hero from "./Hero"

const Faq = () => {
  return (
    <>
      <div className="faq-header">
        <Hero title="FAQ" />
      </div>

      <div className="faq-container">
        <div className="faq-content" style={{ width: "80%", margin: "0 auto" }}>
          {/* Rest of the FAQ content */}
          <Center>
            <Accordion defaultIndex={[0]}>
              {accordions.map((item, index) => (
                <Box key={index}>
                  {" "}
                  <AccordionItems question={item.question} answer={item.answer} />
                </Box>
              ))}
            </Accordion>
          </Center>
        </div>
      </div>
    </>
  )
}

export default Faq
