import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { AutocompleteField } from "../../components/AutocompleteField";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";
import * as yup from 'yup';
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentEstimate, selectCurrentEstimate, setCurrentEstimate } from "../../store/slice/estimateSlice";

type FormValues = {
    startAddress: Address | null
    finalAddress: Address | null
    comments: string
}

 export function EstimateForm() {
     const dispatch = useDispatch()
     const currentEstimate = useSelector(selectCurrentEstimate)
     const formik = useFormik<FormValues>({
         initialValues: {
             startAddress: currentEstimate?.startAddress || null,
             finalAddress:currentEstimate?.finalAddress || null,
             comments: currentEstimate?.comments || ''
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
        const estimate =  await   createEstimate(values as NewEstimateInput)
            dispatch(setCurrentEstimate(estimate))
         }
     })
     const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps (fieldName),
             controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && ! formik.errors[fieldName],
            disabled: !! currentEstimate
        }
    }
    const handleChangeAddress = () => {
        dispatch(clearCurrentEstimate())

    }
     return (
         <>
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

                {!currentEstimate && ( 

                    <div className="d-grid d-md-block">
                    <CustomButton
                    type='submit'
                    loading={formik.isValidating || formik.isSubmitting}
                    disabled={formik.isValidating || formik.isSubmitting}
                    >Calcular Preço</CustomButton>
                    </div>
                )}
            </Form>
            {currentEstimate && (
                <CustomButton variant="outline-primary"
                type='button'
                onClick={handleChangeAddress}
                className="mb-3 mb-md-0"
                >Alterar Endereço</CustomButton>
             )}
         </>
     )
 }