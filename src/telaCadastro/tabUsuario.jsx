import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ESTADO from "../recurso/estado.js";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { buscarUsuarios } from "../redux/usuarioReducer";

export default function tabUsuario(props) {

    const { estado, mensagem, usuarios } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarUsuarios());
    }, [dispatch]);


    if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Buscando usuários...</p>
            </div>
            , { toastId: estado });
    }
    else if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
            , { toastId: estado });
    }
    else {
        toast.dismiss();
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Usuário</th>
                            <th>Imagem</th>
                            <th>Data de ingresso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario) => {
                                return (<tr key={usuario.codigo}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nickname}</td>
                                    <td><img src={usuario.urlAvatar} height={40} width={40} /></td>
                                    <td>{usuario.dataIngresso}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}