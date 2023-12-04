import { Container } from "react-bootstrap";
import Pagina from "../template/Pagina";
import { Alert } from "react-bootstrap";

export default function Tela404(props){
    return(
        <Container>
            <Pagina>
                <Alert variant="danger">
                    O sistema não oferece acesso a essa página.
                </Alert> 
            </Pagina>
        </Container>
    );
}