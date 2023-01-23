import { useState } from "react"
import styled from "styled-components";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import Input from "./Elementos/Input"
import Botao from "./Elementos/Botao";

export default function TelaCadastro(){
 

    const [nome, setNome] = useState("");
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const navigate = useNavigate();


    function sucessoEnvio(response){
        alert(response.data);
        navigate("/");
    }
    function falhaEnvio(erro){
        alert(erro.response.data);
    }
    function fazerCadastro(event){
        event.preventDefault();
        if(senha !== confirmaSenha){
            alert("Os campos de senha devem ser iguais");
            setSenha("");
            setConfirmaSenha("");
        }
       else{
        const dados = {nome, email, senha, confirmaSenha};
        const enviaDados = axios.post(`${process.env.REACT_APP_API_URL}sign-up`, dados);
        enviaDados.then(sucessoEnvio);
        enviaDados.catch(falhaEnvio);

       }
    }
    return(
        <Container>
        <Titulo>MyWallet</Titulo>
        <Form onSubmit={fazerCadastro}>
        <Input tipo={"text"} subescrito={"Nome"} valor={nome} setValor={setNome}/>
        <Input tipo={"email"} subescrito={"E-mail"} valor={email} setValor={setEmail}/>
        <Input tipo={"password"} subescrito={"Senha"} valor={senha} setValor={setSenha}/>
        <Input tipo={"password"} subescrito={"Confirme a senha"} valor={confirmaSenha} setValor={setConfirmaSenha}/>
        <Botao textoBotao={"Cadastrar"}/>
        </Form>
        <Link to="/"><h1>Já tem uma conta? Entre agora!</h1></Link>
    </Container>
    )
}
const Titulo = styled.div`
    font-family:'Saira Stencil One', cursive;
`
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
}
h1{
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
