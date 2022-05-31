import { FormikContext, useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup'

type FormValues = {
    name: string
    email: string
    phone: string
    password: string
    agree: boolean
}

export function RegisterView () {
    const formik = useFormik<FormValues>({
        initialValues: {
            name:'',
            email:'',
            phone:'',
            password:'',
            agree: false
        },
        
        validationSchema: yup.object().shape ({
            name: yup.string().required('Preencha o nome').min(3, 'informe pelo menos 3 caractéres.'),
            email: yup.string().required('Preencha o e-mail.').email('Preencha um e-mail válido.'),
            phone: yup.string().required('Preencha o telefone.'),
            password: yup.string().required('Preencha a senha').min(6, 'informe pelo menos 6 caractéres').max(16,'informe no máximo 16 caractéres.'),
            agree: yup.boolean().equals([true], 'é preciso aceitar os termos de uso.')
        })
           onSubmit: (values) => {
            
        }
    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid:formik.touched[fieldName] && !formik.errors[fieldName]
        }

    }
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}> <PageTitle> Nova conta</PageTitle>
                <Form onSubmit={formik.handleSubmit}>
                <FormField
                label="Nome"
                placeholder="Digite o seu nome"
                {...getFieldProps('name')}
                />
                <FormField 
                type="email"
                label="E-mail"
                placeholder="Digite aqui o seu e-mail"
                {...getFieldProps('email')}
                />
                <FormField 
                label="Telefone"
                placeholder="(00) 00000-0000"
                {...getFieldProps('phone')}
                mask={[
                    {mask: '(00) 0000-0000'},
                    {mask: '(00) 00000-0000'},
                ]}
                onAccept={value => formik.setFieldValue('phone', value)}
                />
                <FormField 
                label="Senha"
                placeholder="informe sua senha de acesso"
                {...getFieldProps('password')}
                type="password"
                />
                <Form.Group className="mb-3" controlId="input-agree">
                    <Form.Check 
                    {...getFieldProps('agree')}
                    type="checkbox"
                    label= {<>Eu li e aceito os <a href="/termos-de-uso.pdf" target={'_blank'}>Termos de uso</a></>}
                    />
                    {formik.touched.agree && formik.errors.agree && (
                        <Form.Control.Feedback type='invalid' className='d-block'>
                            {formik.errors.agree}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <div className="d-grid mb-4">
                    <CustomButton type="submit">
                        Criar conta 
                    </CustomButton>
                </div>
                <p className="text-center">Já possui conta? <br/> <Link to="/login">Entrar</Link></p>
               
                </Form>
                        
                    </Col>
                </Row>
                
            </Container>
        </Layout>
    )
}