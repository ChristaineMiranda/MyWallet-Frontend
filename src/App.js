import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TelaLogin from './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';
import TelaHome from './Telas/TelaHome';
import TelaNovaEntrada from './Telas/TelaNovaEntrada';
import TelaNovaSaida from './Telas/TelaNovaSaida';


export default function App() {
    const [token, setToken] = useState("");
    return(
        <>
       
        <BrowserRouter>
        <Routes>
           <Route path ="/" element={<TelaLogin setToken={setToken}/>}/> 
           <Route path = "/cadastro" element = {<TelaCadastro />}/>
           <Route path = "/home" element = {<TelaHome token={token} setToken={setToken}/>}/>
           <Route path = "/nova-entrada" element = {<TelaNovaEntrada token={token}/>}/>
           <Route path = "/nova-saida" element = {<TelaNovaSaida token={token}/>}/> 
        </Routes>
        </BrowserRouter>
        </>
    )
}