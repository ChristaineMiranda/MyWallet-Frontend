import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TelaLogin from './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';
import TelaHome from './Telas/TelaHome';
import TelaNovaEntrada from './Telas/TelaNovaEntrada';
import TelaNovaSaida from './Telas/TelaNovaSaida';


export default function App() {
    return(
        <>
       
        <BrowserRouter>
        <Routes>
           <Route path ="/" element={<TelaLogin/>}/> 
           <Route path = "/cadastro" element = {<TelaCadastro/>}/>
           <Route path = "/home" element = {<TelaHome/>}/>
           <Route path = "/nova-entrada" element = {<TelaNovaEntrada/>}/>
           <Route path = "/nova-saida" element = {<TelaNovaSaida/>}/> 
        </Routes>
        </BrowserRouter>
        </>
    )
}