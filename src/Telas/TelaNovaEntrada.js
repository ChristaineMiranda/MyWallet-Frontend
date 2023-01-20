import styled from 'styled-components';
import { useState } from 'react';
import Input from './Elementos/Input';
import Botao from './Elementos/Botao';


export default function TelaNovaEntrada() {
    const [valorEntrada, setValorEntrada] = useState("");
    const [descricaoEntrada, setdescricaoEntrada] = useState("");
    return (
        <Container>
            <Titulo>Nova Entrada</Titulo>
            <Registro>
                <Input tipo={"text"} subescrito={"Valor"} valor={valorEntrada} setValor={setValorEntrada} />
                <Input tipo={"text"} subescrito={"Descrição"} valor={descricaoEntrada} setValor={setdescricaoEntrada} />
                <Botao textoBotao={"Salvar entrada"} />
            </Registro>
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
const Registro = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
`