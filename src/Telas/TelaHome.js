import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import iconeSair from "../style/img/sair.png"
import circulo from "../style/img/circulo.png"
import mais from "../style/img/soma.png"
import menos from "../style/img/subtrai.png"
import Registro from "./Elementos/Registro";


export default function TelaHome({ token, setToken }) {
    const [registros, setRegistros] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [registroVazio, setRegistroVazio] = useState(true);
    const navigate = useNavigate();

    function adicionaRetirada() {
        navigate("/nova-saida");
    }
    function adicionaEntrada() {
        navigate("/nova-entrada");
    }
    function sairDaConta() {
        setToken("");
        navigate("/");
    }

    function sucessoBusca(response) {
        setNomeUsuario(response.data.nomeTitular);
        setRegistros(response.data.movimentacao);//retorna uma array com objetos transação
        if (response.data.movimentacao.length) {
            setRegistroVazio(false);
        }

    }
    function falhaBusca(erro) {
        console.log(erro.response.data);
    }
    useEffect(() => {

        const buscaRegistros = axios.get("http://localhost:5000/movimentacoes", token);
        buscaRegistros.then(sucessoBusca);
        buscaRegistros.catch(falhaBusca);
    })

    return (
        <Container>
            <CampoSuperior>
                <p>Olá, {nomeUsuario}</p>
                <img src={iconeSair} alt="sair" onClick={sairDaConta} />
            </CampoSuperior>
            <CampoTransacoes registroVazio={registroVazio}>
                {registroVazio ? "Não há registros de entrada ou saída" : registros.map((item) => <Registro key={item._id} data={item.data} descricao={item.descricao} valor={item.valor} tipo={item.tipo} />)}
                <Saldo>
                    <p>SALDO</p>
                    <p>VALOR</p>
                </Saldo>
            </CampoTransacoes>
            <CampoNovoRegistro>
                <NovoRegistro onClick={adicionaEntrada}>
                    <Circulo src={circulo} alt="contorno" />
                    <IconeMais src={mais} alt="soma" />
                    <p>Nova <br></br>Entrada</p>
                </NovoRegistro>

                <NovoRegistro onClick={adicionaRetirada}>
                    <Circulo src={circulo} alt="contorno" />
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
flex-direction: column;
justify-content: ${props => props.registroVazio ? "center" : "flex-star"};
align-items: center;
color: gray;
position: relative;
`
const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 10px;
    p:nth-child(1){
        margin-left: 15px;
        color:#000000;
        font-size: 17px;
        font-weight: 700;
    }
    p:nth-child(2){
        margin-right: 15px;
    }
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