import Pagina from "../template/Pagina";
import ESTADO from '../recurso/estado.js';
import { buscarMensagens } from "../redux/mensagemReducer.js"
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Form, Button, ListGroup, Spinner, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

export default function TelaMensagens(props) {
    const { estado, mensagem, mensagens } = useSelector((state) => state.mensagem);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarMensagens());
    }, [dispatch]);


    if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Buscando mensagens...</p>
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
                <Pagina>
                    
                    {
                        mensagens.map((mensagem) => {
                            return (
                                <Row className="mb-2">
                                    <Col xs="auto">
                                        <Image src={mensagem.usuario.urlAvatar} height={40} width={40} roundedCircle />
                                    </Col>
                                    <Col>
                                        <div>
                                            <strong>{mensagem.usuario.nickname}</strong>
                                            <span className="ml-2 text-muted">{"   " + mensagem.dataHora}</span>
                                        </div>
                                        <div>{mensagem.mensagem}</div>
                                    </Col>
                                </Row>)
                        })
                    }
                </Pagina>
            </Container>
        );
    }
}