import { useState } from "react"
import styled from "styled-components";

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

            <input type="text" placeholder="Nome" value={nome} onChange={(event) => (setNome(event.target.value))}  />
            <input type="email" placeholder="E-mail" value={email} onChange={(event) => (setEmail(event.target.value))}  />
            <input type="password" placeholder="Senha" value={senha} onChange={(event) => (setSenha(event.target.value))}  />
            <input type="password" placeholder="Confirme a senha" value={confirmaSenha} onChange={(event) => (setConfirmaSenha(event.target.value))} />
            <button type="submit">Cadastrar</button>
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
input{
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border-color: #ffffff;
    margin-bottom: 13px;
    padding-left:10px;
}
input::placeholder{
    color:#000000;
}
button{
    width: 326px;
    height: 46px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: #A328D6;
    margin-bottom: 36px;
    border-radius: 5px;
    border-color: #A328D6;
}
`
