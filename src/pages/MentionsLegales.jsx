import React from "react"
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import Hero from "../components/shared/Hero"
import { Helmet } from "react-helmet" // Importer Helmet pour gérer les balises <head>

const MentionsLegales = () => {
  return (
    <>
      <div className="faq-header">
        <Hero title="Mentions Légales" />
      </div>

      <Box mt={50} mb={50}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Informations sur l'entreprise
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Nom de l'entreprise : Thé Tip Top Statut juridique : Société Anonyme (SA) Adresse du siège social : 18 rue Léon Frot, 75011 Paris Numéro de téléphone : +33 6 12 34 56 78 Adresse e-mail : contact@thetiptop.fr Capital social : 50 000 euros Numéro RCS : RCS PARIS B 517 403 572 Numéro SIRET : 825 012 345 00027 TVA intracommunautaire : FR 32 123456789</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Responsable de la publication
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Nom du responsable de la publication : Éric BOURDAN Fonction - Directeur Général</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hébergement du site
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Nom de l'hébergeur : Ionos Adresse : 7 Place de la Gare, 57200 Sarreguemines, France Numéro de téléphone : +33 9 70 80 89 11</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Propriété intellectuelle
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Le contenu du site (textes, images, vidéos, etc.) est protégé par le droit d'auteur et la propriété intellectuelle. Toute reproduction ou utilisation du contenu sans autorisation est strictement interdite.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Données personnelles
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Le site collecte et traite des données personnelles des utilisateurs (nom, prénom, adresse, e-mail, etc.) conformément aux dispositions de la loi n°78 - 17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Les utilisateurs ont un droit d'accès, de rectification et de suppression des données les concernant en envoyant un e-mail à l'adresse contact@thetiptop.fr.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Cookies
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Le site utilise des cookies pour améliorer l'expérience utilisateur et collecter des données statistiques. Les utilisateurs peuvent désactiver les cookies en modifiant les paramètres de leur navigateur.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Liens hypertextes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Le site peut contenir des liens hypertextes vers des sites tiers. Thé Tip Top ne peut être tenu responsable du contenu de ces sites.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Droit applicable et juridiction complète
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Le site et son contenu sont soumis au droit français. Tout litige relatif au site sera de la compétence exclusive des tribunaux français.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  )
}

export default MentionsLegales
