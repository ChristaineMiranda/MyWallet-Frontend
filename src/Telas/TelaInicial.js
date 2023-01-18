import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'


export default function TelaInicial() {

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
    console.log(email)

    return (
        <Container>
            <div>MyWallet</div>
            <Form onSubmit={fazerLogin}>

                <input type="email" placeholder="E-mail" value={email} onChange={(event) => (setEmail(event.target.value))}  />
                <input type="password" placeholder="Senha" value={senha} onChange={(event) => (setSenha(event.target.value))} />
                <button type="submit">Entrar</button>

            </Form>
            <Link to ="/cadastro">Primeira vez? Cadastre-se!</Link>
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
