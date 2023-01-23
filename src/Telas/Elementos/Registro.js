import styled from "styled-components"
export default function Registro({ data, descricao, tipo, valor }) {
    return (
        <Movimentacao>
            <p>{data}</p>
            <p>{descricao}</p>
            <CampoValor tipo={tipo}>{valor}</CampoValor>
        </Movimentacao>
    )
}

const Movimentacao = styled.div`
display:flex;
width: 100%;
position: relative;
margin-top:23px;
p{
    font-size: 16px;
    font-weight: 400;
}
p:nth-child(1){
    color: #c6c6c6;
    margin-left:12px;
    margin-right: 5px;
}
p:nth-child(2){
    color: #000000;
}
`
const CampoValor = styled.p`
    color: ${props => props.tipo === "saida"? "#C70000" : "#03AC00"};
    position: absolute;
    right: 12px;

`
