import React from "react"
import WithBackgroundImage from "../components/Home/Home_hero"
import SimpleThreeColumns from "../components/Home/Home_features"
import WithSpeechBubbles from "../components/Home/Home_notices"
import Simple from "../components/Home/Home_newsletters"
import { Helmet } from "react-helmet" // Importer Helmet pour gérer les balises <head>

function Home() {
  return (
    <>
      <Helmet>
        <title>Welcome to Our Website</title>
        <meta name="description" content="Explore our wide range of products and services designed to meet your needs. Join us and experience quality like never before." />
        {/* Add more meta tags if needed */}
      </Helmet>
      <WithBackgroundImage />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <Simple />
    </>
  )
}

export default Home
