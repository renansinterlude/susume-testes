import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./home.css";
import { Link } from "react-router-dom";

const Home = ( ) => {
    const [verbos, setVerbos] = useState(['v1', 'v2', 'v3']);

    const onBuscaRealizada = (termo) => {
        let aux = [];
        for (let i = 0; i < verbos.length; i++) {
            if (verbos[i].includes(termo)) {
                aux.push(verbos[i]);
            }
        }
        setVerbos(aux);
    }
    return (
        <div>
        <Cabecalho onBuscaRealizada={onBuscaRealizada}/>
        <div className="container">
        <main className="main">
        <p className='titulo'> Comece por aqui</p>

        <p className='texto'>Se você não sabe por onde começar busque uma palavra: </p>
        <p className='texto'>verbo, substantivo, adjetivo etc.</p>
        <br></br>
        <br></br>
        <p className='texto'> Caso já tenha uma ideia do que está buscando, 
        escolha alguma das opções abaixo:</p>
        <br></br>
        <br></br>
        <div className="opcoes">
            
            <div className="opcao4">
                <p className='tituloopcao'> ESTUDE </p>
                <p className='tituloopcao'> PELO </p>
                <p className='tituloopcao'> JLPT </p>
            </div>

            <Link to="/verbos"> 
            <div className="opcao5">
                <p className='tituloopcao'> LISTA DE </p>
                <p className='tituloopcao'> VERBOS </p>
            </div>
            </Link>
        </div>

        <a href="SAIBA_MAIS.html" className="saibaMais">
            <span>SAIBA MAIS</span>
        </a>

    </main>
    </div>



        <Rodape />
        </div>
    );
}

export default Home;
