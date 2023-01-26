import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from './Elementos/Input';
import Botao from './Elementos/Botao';


export default function TelaNovaEntrada({ token }) {
    const [valorEntrada, setValorEntrada] = useState("");
    const [descricaoEntrada, setDescricaoEntrada] = useState("");
    const navigate = useNavigate();

    function sucessoEntrada(response) {
        alert("Registrado com sucesso");
        navigate("/home");
    }
    function falhaEntrada(erro) {
        alert(erro.response.data);
        setValorEntrada("");
        setDescricaoEntrada("");
    }
    function registrarEntrada(event) {
        event.preventDefault();
        const preco = valorEntrada.replace(",", ".");
        const novaEntrada = { tipo: "entrada", valor: preco, descricao: descricaoEntrada };
        const enviaEntrada = axios.post(`${process.env.REACT_APP_API_URL}insere-movimentacao`, novaEntrada, token);
        enviaEntrada.then(sucessoEntrada);
        enviaEntrada.catch(falhaEntrada);
    }
    return (
        <Container>
            <Titulo>Nova Entrada</Titulo>
            <RegistrarEntrada onSubmit={registrarEntrada}>
                <Input tipo={"number"} subescrito={"Valor"} valor={valorEntrada} setValor={setValorEntrada} />
                <Input tipo={"text"} subescrito={"Descrição"} valor={descricaoEntrada} setValor={setDescricaoEntrada} />
                <Botao textoBotao={"Salvar entrada"} />
            </RegistrarEntrada>
        </Container>
    )
}

const Container = styled.div`
margin-top: 25px;

`
const Titulo = styled.div`
color: #ffffff;
font-weight: 700;
font-size: 26px;
margin-bottom: 25px;
margin-left: 25px;
`
const RegistrarEntrada = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
`