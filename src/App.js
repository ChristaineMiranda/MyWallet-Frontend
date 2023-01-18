import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TelaInicial from './Telas/TelaInicial'
import TelaCadastro from './Telas/TelaCadastro'

export default function App() {
    return(
        <>
       
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<TelaInicial/>}/> 
           <Route path = "/cadastro" element = {<TelaCadastro/>}/>
            {/*  <Route path = "/home" element = {<TelaHome/>}/>
            <Route path = "/nova-entrada" element = {<TelaNovaEntrada/>}/>
            <Route path = "/nova-saida" element = {<TelaNovaSaida/>}/> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}