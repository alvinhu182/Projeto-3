import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import imgendereco from "../../assets/img/endereco.png"

export function TourView () {
  return (
    <Layout>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <PageTitle>Endereço dos  pontos turísticos de poços de caldas</PageTitle>
            <p>Desejamos que aproveite o passeio.</p>
            
            <a  target="blank" href="https://www.google.com/search?tbs=lf:1,lf_ui:1&tbm=lcl&q=endere%C3%A7o+pontos+turisticos+po%C3%A7os+de+caldas&rflfq=1&num=10&sa=X&ved=2ahUKEwj1n-f8pr34AhWKBLkGHVysC9MQjGp6BAgXEAE&biw=1920&bih=937&dpr=1#rlfi=hd:;si:;mv:[[-21.7625085,-46.5485876],[-21.8166643,-46.628602799999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1">
              <img
                src={imgendereco}
                alt="endereços"
                width={626}
                height={391} 
              />
            </a>
           
           
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}