import { Field, Form, Formik } from "formik"
import { FormControl, FormLabel, FormErrorMessage, Input, Button, useDisclosure } from "@chakra-ui/react"
import { FiPlusCircle } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function FormikExample() {
  const navigate = useNavigate()
  const { onClose } = useDisclosure()

  function validateCode(value) {
    let error
    if (!value) {
      error = "Un code est requis"
    } else if (value.length !== 6 || value !== "123456") {
      error = "Code incorrect"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // Check if the code is correct
          if (values.name === "123456") {
            // Navigate to the history page
            navigate("/historique")
            // Close the modal
            onClose()
          } else {
            // Show an error message
            actions.setFieldError("name", "Code incorrect")
          }

          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <Field name="name" validate={validateCode}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Composer votre code</FormLabel>
                <Input {...field} placeholder="Code de 6 caractères" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} bgColor="#995414" color="white" isLoading={props.isSubmitting} type="submit" icon={props.isSubmitting ? <FiPlusCircle /> : undefined}>
            Gagnez tout de suite
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikExample
