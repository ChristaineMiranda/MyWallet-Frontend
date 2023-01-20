import styled from "styled-components";

export default function Botao({textoBotao}){
    return(
        <BotaoStyled type="submit">{textoBotao}</BotaoStyled>

    )
}

const BotaoStyled = styled.button`
    width: 326px;
    height: 46px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: #A328D6;
    margin-bottom: 36px;
    border-radius: 5px;
    border-color: #A328D6;
`