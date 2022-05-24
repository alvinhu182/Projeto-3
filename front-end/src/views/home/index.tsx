import { faFacebook, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";

export function HomeView () {
    return (
        <Container>
            <Title> TuriPoços</Title>
            <Button onClick={() => toast.success('hehe deu bom')}>Teste</Button>
            <FontAwesomeIcon icon={faFacebookSquare} />
        </Container>

    )
}
const Title = styled.p`
font-size: 3rem;
`
