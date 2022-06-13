import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { AutocompleteField } from "../../components/AutocompleteField";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";
import * as yup from 'yup';

type FormValues = {
    startAddress: Address | null
    finalAddress: Address | null
    comments: string
}

 export function EstimateForm() {
     const formik = useFormik<FormValues>({
         initialValues: {
             startAddress: null,
             finalAddress:null,
             comments:''
         },
         validationSchema: yup.object().shape({
             startAddress: yup.object()
             .typeError('Selecione um endereço na lista.'),
             finalAddress: yup.object()
             .typeError('Selecione um endereço na lista.'),
             comments: yup.string()
             .required('informe as instruções.')
         }), 
         onSubmit: async (values) => {

         }
     })
     const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps (fieldName),
             controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && ! formik.errors[fieldName]
        }
    }
     return (
         <Form onSubmit={formik.handleSubmit}>
              <AutocompleteField
             {...getFieldProps('startAddress')}
             label="Endereço de partida (A)"
             placeholder="Informe o endereço completo"
            onChange={(address) => formik.setFieldValue('startAddress', address)}
            
             />
              <AutocompleteField
             {...getFieldProps('finalAddress')}
             label="Endereço de chegada (B)"
             placeholder="Informe o endereço completo"
             onChange={(address) => formik.setFieldValue('finalAddress', address)}
             
            
             />
              <FormField
             {...getFieldProps('comments')}
             label="Instruções para o motorista"
             placeholder="Informe ao motorista se você vai querer ajuda para conhecer o local"
             as='textarea'
             />
             <div className="d-grid d-md-block">
             <CustomButton
              type='submit'
              loading={formik.isValidating || formik.isSubmitting}
              disabled={formik.isValidating || formik.isSubmitting}
              >Calcular Preço</CustomButton>
             </div>
         </Form>
     )
 }