import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NotFoundView() {


return (
    <Layout>
        <Container className="text-center">
            <p> A página que você está tentando acessar não foi encontrada ou foi movida</p>
            <p> Utilize o menu superior para encontrar o que deseja.</p>
        </Container>
        <PageTitle> Página não encontrada </PageTitle>
    </Layout>
    )
}