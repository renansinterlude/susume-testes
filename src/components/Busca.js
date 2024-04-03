import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rodape from "./Rodape";
import "./home.css";
import verbos from "./verbos";

const Busca = () => {
    const verbosOriginais = verbos;
    const [termoDeBusca, setTermoDeBusca] = useState("");
    const [verbosFiltrados, setVerbosFiltrados] = useState([]);
    const [mostrarInformacoes, setMostrarInformacoes] = useState(false);

    const handleBuscaSubmit = (event) => {
        event.preventDefault();
        const termo = termoDeBusca.toLowerCase();
        if (termo === "") {
            setVerbosFiltrados([]);
            setMostrarInformacoes(false);
        } else {
            const verbosFiltrados = verbosOriginais.filter(verbo => {
                return Object.values(verbo).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(termo)
                );
            });
            setVerbosFiltrados(verbosFiltrados);
            setMostrarInformacoes(true);
        }
    };

    const handleBuscaChange = (event) => {
        setTermoDeBusca(event.target.value);
    };

    return (
        <div>
            <header>
                <div className="cabecalho">
                    <Link to="/home">
                        <div className="logo">
                            <h3>ススメ！</h3>
                        </div>
                    </Link>
                    <div className="busca">
                        <form onSubmit={handleBuscaSubmit}>
                            <input
                                type="text"
                                placeholder="DIGITE UMA PALAVRA"
                                value={termoDeBusca}
                                onChange={handleBuscaChange}
                            />
                            <button type="submit">
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

            <div className="container">
                <main className="main">
                    <p className='titulo'> Resultados da busca</p>
                    <p className='texto'>Aqui estão os resultados da sua busca:</p>
                    <br></br>
                    <br></br>   

                    <br></br>
                    <br></br>
                    <div className="containerVerbo" style={{ display: mostrarInformacoes ? 'block' : 'none' }}>
                        {mostrarInformacoes && verbosFiltrados.length === 0 && (
                            <p>Nenhum resultado encontrado.</p>
                        )}
                        <ol>
                            {verbosFiltrados.map((verbo, index) => (
                                <li key={index}>
                                    <strong className="kanji">{verbo.Vocabulary}</strong> <br></br> {mostrarInformacoes && (
                                        <>
                                            <p  className="textoTraducao">{verbo.Translation}</p>
                                            <p><b>{verbo.Vocabulary} [{verbo.Pronunciation}]</b> {verbo["Word-Type"]}</p>
                                            <p>{verbo.WordType}</p>
                                            <br></br>
                                            <br></br>
                                            <hr></hr>
                                            <br></br>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </main>
            </div>
            <Rodape />
        </div>
    );
};

export default Busca;
