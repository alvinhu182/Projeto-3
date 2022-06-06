import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/Logo-turipocos.png";
import { selectIsUserLoggedIn } from "../../store/slice/userSlice";
type Props = {
    withoutMargin?: boolean
}
export function Footer ({withoutMargin = false }: Props) {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
        <FooterStyled className={`text-center ${withoutMargin ? '': 'mt-5'}`}>
            <Container className="d-lg-flex align-items-center">
                <Link to='/' className="me-lg-auto">
                <img src={Logo} alt="Turipoços" width={60} height={60} />
                </Link>
               
                <Nav className="flex-column flexx-lg-row my-4 my-lg-0">
                    <Nav.Link as={Link} to='/' className="text-white">Início </Nav.Link>
                    {isUserLoggedIn? (
                        <Nav.Link as={Link} to='/nova-corrida' className="text-white">Nova corrida </Nav.Link>

                    ) : (
                        <>
                        
                    <Nav.Link as={Link} to='/login' className="text-white">Login </Nav.Link>
                        </>
                    )}
                    
                    <Nav.Link href="/termos-de-uso.pdf" target= "_blank" className="text-white"> Termos de uso </Nav.Link>
                </Nav>
                <Nav className="justify-content-center">
                    <Nav.Link href="http://facebook.com" target="_blank" className="text-white">
                        <IconStyled icon ={faFacebookSquare} />
                    </Nav.Link>
                    <Nav.Link href="http://instagram.com" target="_blank" className="text-white">
                        <IconStyled icon ={faInstagramSquare} />
                    </Nav.Link>
                </Nav>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
background: #096ae1;
padding: 30px 0 40px;
@media (min-width: 992px) {
    padding: 26px 0;
}
`

const IconStyled = styled(FontAwesomeIcon)`
    font-size: 40px;
`
const ImageStyled = styled.img `
@media (min-width: 992px) {
    width: 190px;
    height: auto;
}
`
