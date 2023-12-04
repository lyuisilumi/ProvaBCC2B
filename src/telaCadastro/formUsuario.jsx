import { useState } from 'react';
import { toast } from 'react-toastify';
import ESTADO from '../recurso/estado.js';
import { incluirUsuario } from '../redux/usuarioReducer';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

export default function formUsuario(props) {

    const usuarioVazio = {
        nickname: '',
        urlAvatar: ''
    }

    const [usuario, setUsuario] = useState(usuarioVazio);
    const [formValidado, setFormValidado] = useState(false);
    const { estado, mensagem, usuarios } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setUsuario({ ...usuario, [componente.name]: componente.value });
    }
    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                dispatch(incluirUsuario(usuario));
            }
            setUsuario(usuarioVazio);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
            , { toastId: estado });
    }
    else if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Processando a requisição...</p>
            </div>
            , { toastId: estado });
    }
    else {
        toast.dismiss();
        return (

            <Container>
                <h2>Cadastro de usuários</h2>
                <Form noValidate>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Usuário:"
                                    className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        id="nickname"
                                        name="nickname"
                                        value={usuario.nickname}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome do usuario</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Url para foto de usuario:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Informe o url da imagem"
                                        id="urlAvatar"
                                        name="urlAvatar"
                                        value={usuario.urlAvatar}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a url do usuário</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset={5} className="d-flex justify-content-end">
                            <Button type="submit" variant={"primary"}>{"Cadastrar"}</Button>
                        </Col>
                        <Col md={6} offset={5}>
                            <Button type="button" variant={"secondary"} onClick={() => {
                            }
                            }>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}