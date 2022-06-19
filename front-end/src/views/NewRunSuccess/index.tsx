import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewRunSuccessView () {
  return (
    <Layout>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <PageTitle>Pedido recebido com sucesso!</PageTitle>
            <p>Desejamos que aproveite o passeio.</p>
            <CustomButton variant="success" size="lg" to='/novo-pedido'>Fazer outra corrida</CustomButton>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}