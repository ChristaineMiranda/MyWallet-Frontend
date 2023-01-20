import styled from "styled-components";

export default function CaixaInput({tipo, subescrito, valor, setValor}){
    return(
        <InputStyled type={tipo} placeholder={subescrito} value={valor} onChange={(event) => (setValor(event.target.value))}  />

    )
}

const InputStyled = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border-color: #ffffff;
    margin-bottom: 13px;
    padding-left:10px;

::placeholder{
    color:#000000;
    font-family: 'Raleway', sans-serif;
}`