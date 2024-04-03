import React, { useState } from 'react';
import './cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = (props) => {
    const [termoDeBusca, setTermoDeBusca] = useState('');
    
    return (
        <header>
            <div className="cabecalho">
                <Link to="/home">
                <div className="logo">
                <h3>ススメ！</h3>
                </div>
                </Link>
                <div className="busca">
                <form action="busca">
                    <input
                    id="pesquisa"
                    className="input"
                    name="buscar"
                    required
                    onChange={(termoDigitado) => setTermoDeBusca(termoDigitado) }
                    placeholder="DIGITE UMA PALAVRA"
                    />
                    <button type="submit" onClick={() => { props.onBuscaRealizada(termoDeBusca)}}>
                    PESQUISAR
                    </button>
                </form>
                </div>
                <div className="menu">
                <Link to="/home">
                    <span>HOME</span>
                </Link>
                <a href="jlpt.html">
                    <span>ESTUDE PELO JLPT</span>
                </a>
                <a href="como-usar.html">
                    <span>COMO USAR</span>
                </a>
                <a href="sobre.html">
                    <span>SOBRE NÓS</span>
                </a>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;