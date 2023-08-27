import React from "react"
import { Box, Center, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import Hero from "../components/shared/Hero"
import { Helmet } from "react-helmet" // Importer Helmet pour gérer les balises <head>

const ConditionsGenerales = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Les Conditions Générales de Vente et d'Utilisation de ThéTipTop. Découvrez nos termes et conditions pour l'utilisation de nos services et l'achat de nos produits." />
      </Helmet>

      <div className="faq-header">
        <Hero title="Conditions Générales " />
      </div>
      <Box mt={50} mb={50}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Introduction
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Les présentes Conditions Générales de Vente et d'Utilisation ("CGVU") régissent l'utilisation du site internet et des services fournis par l'entreprise ThéTipTop ("nous", "notre", "nos"). En accédant à notre site, en effectuant des achats ou en utilisant nos services, vous acceptez d'être lié par ces CGVU. Veuillez les lire attentivement avant d'utiliser nos services.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  1. Commandes et Paiements
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>1.1. En passant une commande sur notre site, vous confirmez que les informations fournies sont exactes, complètes et à jour. Nous nous réservons le droit de refuser toute commande en cas de suspicion de fausse déclaration ou de fraude.</Text>
              <Text>1.2. Les prix affichés sur notre site sont en euros et incluent la TVA applicable, sauf indication contraire. Les frais de livraison sont spécifiés lors de la commande.</Text>
              <Text>1.3. Les paiements peuvent être effectués par les méthodes de paiement disponibles sur notre site. Les informations de paiement sont traitées de manière sécurisée et ne sont pas stockées par ThéTipTop.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  2. Livraison
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>2.1. Nous nous efforçons de livrer vos commandes dans les délais indiqués lors de la commande. Cependant, des retards peuvent survenir en raison de circonstances indépendantes de notre volonté.</Text>
              <Text>2.2. Les frais de livraison sont à la charge de l'acheteur, sauf indication contraire.</Text>
              <Text>2.3. À la réception de votre commande, veuillez vérifier les produits. En cas de produits endommagés ou manquants, veuillez nous contacter dans les [nombre de jours] jours suivant la réception.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  3. Retours et Remboursements
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>3.1. Si vous n'êtes pas satisfait de votre commande, veuillez nous contacter dans les [nombre de jours] jours suivant la réception pour organiser le retour des produits. Les frais de retour sont à la charge de l'acheteur.</Text>
              <Text>3.2. Les produits retournés doivent être dans leur état d'origine et non ouverts. Nous procéderons au remboursement du montant des produits retournés, moins les frais de livraison et de traitement.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4. Propriété Intellectuelle
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>4.1. Tous les contenus présents sur notre site, tels que les textes, images, logos, etc., sont protégés par des droits de propriété intellectuelle et sont la propriété exclusive de ThéTipTop ou de ses fournisseurs. Toute utilisation non autorisée est strictement interdite.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  5. Confidentialité
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>5.1. Nous collectons et utilisons vos informations conformément à notre Politique de Confidentialité. En utilisant nos services, vous consentez à cette collecte et utilisation.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  6. Contact
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>6.1. Pour toute question, demande d'assistance ou réclamation, veuillez nous contacter à [adresse e-mail ou numéro de téléphone].</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  7. Modification des CGVU
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>7.1. Nous nous réservons le droit de modifier ces CGVU à tout moment. Les modifications prendront effet dès leur publication sur notre site. Veuillez vérifier périodiquement les CGVU pour rester informé des éventuelles mises à jour.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  )
}

export default ConditionsGenerales
