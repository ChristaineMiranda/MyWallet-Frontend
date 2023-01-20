import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconeSair from "../style/img/sair.png"
import circulo from "../style/img/circulo.png"
import mais from "../style/img/soma.png"
import menos from "../style/img/subtrai.png"

export default function TelaHome (){
    let registros = "Não há registros de entrada ou saída"
 

    const navigate = useNavigate();

    function adicionaRetirada (){
        alert("retirada")
    }
    function adicionaEntrada () {
        alert ("entrada")
    }
    function sairDaConta (){
        //limpa email, senha e token
        navigate("/");
    }
    return(
        <Container>
        <CampoSuperior>
            <p>Olá, Fulano</p>
            <img src={iconeSair} alt="sair" onClick={sairDaConta}/>
        </CampoSuperior>
        <CampoTransacoes>{registros}</CampoTransacoes>
        <CampoNovoRegistro>
            <NovoRegistro onClick={adicionaEntrada}>
                <Circulo src={circulo} alt="contorno"/>
                <IconeMais src={mais} alt="soma" />
                <p>Nova <br></br>Entrada</p>
            </NovoRegistro>

            <NovoRegistro onClick={adicionaRetirada}>
                <Circulo src={circulo} alt="contorno"/>
                <IconeMenos src={menos} alt="subtrai" />
                <p>Nova<br></br>Saída</p>
            </NovoRegistro>
        </CampoNovoRegistro>
        </Container>
    )
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const CampoSuperior = styled.div`
display: flex;
justify-content: space-between;
width: 326px;
margin: 25px;
color: #ffffff;
font-size: 26px;
font-weight: 700;
`
const CampoTransacoes = styled.div`
width:326px;
height: 446px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
color: gray;
`
const CampoNovoRegistro = styled.div`
display: flex;
justify-content: space-between;
width: 326px;
margin-top: 13px;
`
const NovoRegistro = styled.div`
 width: 155px;
 height: 114px;
 border-radius: 5px;
 background-color: #A328D6;
position: relative;
p{
    margin-top:60px;
    margin-left:10px;
    color:#ffffff;
    font-size: 17px;
    font-weight: 700;
}
`
const IconeMais = styled.img`
position:absolute;
top:10px;
left:13px;
`
const IconeMenos = styled.img`
position:absolute;
top:14px;
left:13px;
`
const Circulo = styled.img`
position: absolute;
left: 7px;
top: 4px;
`