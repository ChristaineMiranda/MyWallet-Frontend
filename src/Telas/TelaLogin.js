import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Input from './Elementos/Input';
import Botao from './Elementos/Botao';


export default function TelaLogin({ setToken }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function sucessoLogin(response) {
        setToken({
            headers: {
              token: `Bearer ${response.data}`
            }
          });//`Bearer ${response.data}`
        navigate("/home");
    }
    function falhaLogin(erro) {
        if (erro.response.status == 409) {//usuário não cadastrado, levar pra tela de cadastro
            navigate("/cadastro");
        }
        //se erro de senha ou email apenas limpa campos
        setEmail("");
        setSenha("");
        alert(erro.response.data);
    }
    function fazerLogin(event) {
        event.preventDefault();
        const dadosLogin = { email, senha };
        const enviaDados = axios.post("http://localhost:5000/", dadosLogin);//MUDAR PARA VARIÁVEIS DE AMBIENTE
        enviaDados.then(sucessoLogin);
        enviaDados.catch(falhaLogin);
    }

    return (
        <Container>
            <div>MyWallet</div>
            <Form onSubmit={fazerLogin}>
                <Input tipo={"email"} subescrito={"E-mail"} valor={email} setValor={setEmail} />
                <Input tipo={"password"} subescrito={"Senha"} valor={senha} setValor={setSenha} />
                <Botao textoBotao={"Entrar"} />
            </Form>
            <LinkStyled to="/cadastro"><p>Primeira vez? Cadastre-se!</p></LinkStyled>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
div{
    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 24px;
    font-family:'Saira Stencil One', cursive;
}
h1{
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
}
`
const LinkStyled = styled(Link)`
text-decoration: none;
color: #ffffff;
font-weight: 700;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
