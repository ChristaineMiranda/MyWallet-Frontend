import { useState } from "react"
import styled from "styled-components";
import Input from "./Elementos/Input"
import Botao from "./Elementos/Botao";

export default function TelaCadastro(){
 

    const [nome, setNome] = useState("");
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    function fazerCadastro(event){
        event.preventDefault();
        if(senha !== confirmaSenha){
            alert("Os campos de senha devem ser iguais");
            setSenha("");
            setConfirmaSenha("");
        }
        //ENVIAR PRO BACKEND
    }
    return(
        <Container>
        <div>MyWallet</div>
        <Form onSubmit={fazerCadastro}>
        <Input tipo={"text"} subescrito={"Nome"} valor={nome} setValor={setNome}/>
        <Input tipo={"email"} subescrito={"E-mail"} valor={email} setValor={setEmail}/>
        <Input tipo={"password"} subescrito={"Senha"} valor={senha} setValor={setSenha}/>
        <Input tipo={"password"} subescrito={"Confirme a senha"} valor={confirmaSenha} setValor={setConfirmaSenha}/>
        <Botao textoBotao={"Cadastrar"}/>
        </Form>
        <h1>Já tem uma conta? Entre agora!</h1>
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
}
h1{
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
