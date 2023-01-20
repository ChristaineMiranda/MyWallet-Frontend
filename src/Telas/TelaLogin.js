import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Input from './Elementos/Input';
import Botao from './Elementos/Botao';


export default function TelaLogin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function fazerLogin (event){
        event.preventDefault(); 
        const dadosLogin = { email, senha};
        //ENVIAR PARA O BACK EMAIL E SENHA
        //const enviaDados = axios.post(url, dadosLogin);
        //enviaDados.then(() => navigate("/home"));
        //enviaDados.catch((erro) => alert(erro,response.data.message));

    }
    //com forms quem chama a função não é o botão, mas sim o container!!!

    return (
        <Container>
            <div>MyWallet</div>
            <Form onSubmit={fazerLogin}> 
            <Input tipo={"email"} subescrito={"E-mail"} valor={email} setValor={setEmail}/>
            <Input tipo={"password"} subescrito={"Senha"} valor={senha} setValor={setSenha}/>
            <Botao textoBotao={"Entrar"}/>
            </Form>
            <LinkStyled to ="/cadastro"><p>Primeira vez? Cadastre-se!</p></LinkStyled>
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
