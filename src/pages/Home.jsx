import React from "react"
import WithBackgroundImage from "../components/Home/Home_hero"
import SimpleThreeColumns from "../components/Home/Home_features"
import WithSpeechBubbles from "../components/Home/Home_notices"
import Simple from "../components/Home/Home_newsletters"

function Home() {
  return (
    <>
      <WithBackgroundImage />
      <SimpleThreeColumns/>
      <WithSpeechBubbles/>
      <Simple/>
    </>
  )
}

export default Home
