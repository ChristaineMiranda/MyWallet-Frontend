import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from './Elementos/Input';
import Botao from './Elementos/Botao';


export default function TelaNovaEntrada({token}) {
    const [valorSaida, setValorSaida] = useState("");
    const [descricaoSaida, setdescricaoSaida] = useState("");
    const navigate = useNavigate();

    function sucessoSaida(response) {
        alert("Registrado com sucesso");
        navigate("/home");
    }
    function falhaSaida(erro) {
        alert(erro.response.data);
        setValorSaida("");
        setdescricaoSaida("");
    }
    function registrarSaida(event) {
        event.preventDefault();
        const novaSaida = { tipo: "saida", valor: valorSaida, descricao: descricaoSaida };
        const enviaSaida = axios.post(`${process.env.REACT_APP_API_URL}insere-movimentacao`, novaSaida, token);
        enviaSaida.then(sucessoSaida);
        enviaSaida.catch(falhaSaida);
    }

    return (
        <Container>
            <Titulo>Nova Saída</Titulo>
            <RegistrarSaida onSubmit={registrarSaida}>
                <Input tipo={"number"} subescrito={"Valor"} valor={valorSaida} setValor={setValorSaida} />
                <Input tipo={"text"} subescrito={"Descrição"} valor={descricaoSaida} setValor={setdescricaoSaida} />
                <Botao textoBotao={"Salvar saída"} />
            </RegistrarSaida>
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
const RegistrarSaida = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`