import { Field, Form, Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { FiPlusCircle} from "react-icons/fi"

function FormikExample({ onClose }) {
  function validateCode(value) {
    let error;
    if (!value) {
      error = 'Un code est requis';
    } else if (value.length !== 10) {
      error = 'Veuillez entrer un code de 10 chiffres SVP';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // Add any form submission logic here if needed

          // Close the modal after form submission

          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateCode}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Composer votre code</FormLabel>
                <Input {...field} placeholder='Code de 10 caractère' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            bgColor='#995414'
            color='white'
            isLoading={props.isSubmitting}
            type='submit'
            icon={props.isSubmitting ? <FiPlusCircle /> : undefined}
          >
            Gagnez tout de suite
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikExample;
