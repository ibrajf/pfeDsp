import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from "@chakra-ui/react"
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc"

const Feature = ({ title, text, icon }) => {
  return (
    <Stack aria-label={`${title}`}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        <Icon as={icon} w={10} h={10} aria-hidden="true" />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box p={4} m={20} aria-label="Features section">
      <Stack spacing={0} mb={10} align={"center"}>
        <Heading aria-label="Section title">Qui sommes nous ?</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} aria-label="Features grid">
        <Feature icon={FcAssistant} title={"Jouez et Gagnez avec ThéTipTop!"} text={"Participez à notre jeu-concours unique en son genre pour célébrer l`ouverture de notre 10ème boutique à Nice. Tous les clients avec un ticket de caisse de plus de 49€ recevront un numéro à 10 chiffres pour une participation assurée. Des récompenses théinées sont à gagner à 100% : des infuseurs, des thés détox, des thés signatures, et des coffrets découverte."} />
        <Feature icon={FcDonate} title={"Découvrez les Saveurs Uniques du Thé avec ThéTipTop!"} text={"Explorez notre sélection exquise de thés bios, faits à la main, et laissez-vous tenter par notre jeu-concours exceptionnel. Gagnez des infuseurs, des thés détox, des thés signatures, et des coffrets découverte d`une valeur allant jusqu`à 69€. Tentez votre chance dès maintenant!"} />
        <Feature icon={FcInTransit} title={"Un An de Thé en Jeu!"} text={"Participez au jeu-concours ThéTipTop et tentez de gagner un an de thé d`une valeur de 360€. Profitez également de 30 jours pour tester vos numéros de ticket et réclamer vos récompenses en magasin ou en ligne. Une expérience théinée unique vous attend !"} />
      </SimpleGrid>
    </Box>
  )
}
