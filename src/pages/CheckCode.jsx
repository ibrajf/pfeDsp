import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import checkcodeImage from "../images/checkCode.jpg"
import CheckCodeForm from "../components/checkCode/CheckCodeForm"
import axios from "axios"

const CheckCode = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/newsletters")
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  // Use the 'data' variable to display emails only
  const renderEmails = () => {
    if (data) {
      const emails = data["hydra:member"].map(member => <p key={member.id}>{member.email}</p>)
      return emails
    } else {
      return <p>Loading...</p>
    }
  }

  return (
    <Flex bgImage={`url(${checkcodeImage})`} bgSize="cover" height="85vh" display="flex" justifyContent="center">
      <CheckCodeForm />
      {renderEmails()}
    </Flex>
  )
}

export default CheckCode
