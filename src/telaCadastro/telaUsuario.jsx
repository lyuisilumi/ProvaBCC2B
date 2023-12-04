import { Container } from "react-bootstrap";
import Pagina from "../template/Pagina";
import FormularioUsuario from "./formUsuario";
import TabelaUsuario from "./tabUsuario";
import { useState } from "react";

export default function TelaUsuario(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [usuarioParaEdicao, setUsuarioParaEdicao] = useState({
        nickname: '',
        urlAvatar: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Container>
            <Pagina>
                <FormularioUsuario />
                <TabelaUsuario />
            </Pagina>
        </Container>
    );
}