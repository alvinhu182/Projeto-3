import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/logo-turipocos.png"
import { CustomButton } from "../CustomButton";

export function Header () {
    const [isTransparent, setIsTransparent] = useState(true)
    useEffect(()=> {
        const scrollChange = () => {
            const isLowScroll= window.scrollY < 100
            if (isLowScroll != isTransparent) {
             setIsTransparent(isLowScroll)
            }  
         }
        window.addEventListener("scroll", scrollChange)
        return () => {
            window.removeEventListener("scroll" , scrollChange)
        }
    }, [isTransparent])
    return (
      <Navbar fixed='top' expand="lg" bg={isTransparent ? undefined : "white"}>
          <Container>
              <Navbar.Brand to ='/' as={Link}>
                 <img src={isTransparent ? Logo : Logo} alt="Turipoços" width={194} height={51}/>
              </Navbar.Brand>
                  <NavbarToggleStyled>
                    <FontAwesomeIcon icon={faBars} className={isTransparent ? "text-white" : "text-dark"} size="lg" />
                  </NavbarToggleStyled>
                  <NavbarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
                      <Nav className="ms-auto">
                          <NavLinkStyled forwardedAs={Link} to="/">Inicio</NavLinkStyled>
                          <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Criar conta</CustomButton>
                          <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Fazer login</CustomButton>
                      </Nav>
                  </NavbarCollapseStyled>
                  
          </Container>
      </Navbar>
    )
}
const NavbarToggleStyled = styled(Navbar.Toggle)`
border:none;
`

const NavbarCollapseStyled = styled(Navbar.Collapse)`
@media (max-width: 991px){
    background-color: #fff;
    margin: 0 -12px;
    padding: 1rem 2rem;
}
`

const NavLinkStyled =styled(Nav.Link)`
@media (min-width: 992px){
    color: #fff !important;
}
`