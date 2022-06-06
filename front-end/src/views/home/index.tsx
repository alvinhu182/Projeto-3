import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bgMobile from "../../assets/img/bg-turipocos.jpg";
import bgDesktop from "../../assets/img/bg-turipocos.jpg";
import { CustomButton } from "../../components/CustomButton";
import {Layout} from "../../components/Layout"
import { selectIsUserLoggedIn } from "../../store/slice/userSlice";


export function HomeView () {
   const isUserLoggedIn =  useSelector(selectIsUserLoggedIn)
    return (
        <Layout startTransparent withoutMargin>
            <Banner className="vh-100">
                <Container className="h-100 d-flex flex-column justify-content-center align-items-lg-start">
                    <Title className="text-white text-center text-lg-start mt-auto mt-lg-0">Vamos te apresentar esta linda cidade de um jeito inesquecivel </Title>
                    {isUserLoggedIn ? (
                        <CustomButton  size="lg" className="mt-auto mt-lg-3 mb-2"to="/nova-corrida">Nova Corrida</CustomButton>
                   
                   ) : (
                       <>
                    <CustomButton  size="lg" className="mt-auto mt-lg-3 mb-2"to="/cadastro">Criar conta</CustomButton>
                
                    <CustomButton variant="success" size="lg" className="mb-4" to='/login' >Fazer login</CustomButton>
                     </>
                    )}
                    
                
                </Container>
        </Banner>
       </Layout>
    )
}

const Banner = styled.div`
background: url (${bgMobile}) no-repeat center center;
background-size: cover;
@media (min-width: 576px){
    background-image: url(${bgDesktop})
}
@media (min-width:768px){
    background-image: url (${bgMobile});
}
@media (min-width: 992px){
    background-image: url(${bgDesktop})
}
`

const Title = styled.h1 `
font-size: 2.25rem;
font-weight: bold;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (min-width: 992px) {
    font-size: 3rem;
    max-width: 500px;
}`