import axios from "axios"
import { useState } from "react"
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import bcrypt from "bcryptjs"

function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const hashPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Hash the password with bcrypt
    const hashedPassword = hashPassword(formValues.password)

    // Replace the plain password with the hashed one
    const dataToSend = { ...formValues, password: hashedPassword }

    axios
      .post("https://symfony.dsp-archiwebo21a-wd-ij-ma.fr/api/users", dataToSend)
      .then(response => {
        console.log("User created successfully:", response.data)
      })
      .catch(error => {
        console.error("An error occurred while creating the user:", error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input type="text" placeholder="Enter your first name" onChange={e => setFormValues({ ...formValues, firstName: e.target.value })} />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" placeholder="Enter your last name" onChange={e => setFormValues({ ...formValues, lastName: e.target.value })} />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" onChange={e => setFormValues({ ...formValues, email: e.target.value })} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter a strong password" onChange={e => setFormValues({ ...formValues, password: e.target.value })} />
      </FormControl>
      <Button type="submit">Sign Up</Button>
    </form>
  )
}

export default SignUp
