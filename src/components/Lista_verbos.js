import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "./lista_verbos.css";
import { Link } from "react-router-dom";

const ListaVerbos = () => {
    return (
        <div>
            <Cabecalho />
                <div className="container">
                    <main className="main">
                        <p className='titulo'>Lista de Verbos</p>

                        <p className='texto'>Criamos listas com os verbos divididos pelos grupos em que fazem parte, clique para consultar os verbos de cada grupo. </p>
                        
                        <br></br>
                        <br></br>
                        <p className='texto'>Grupo I</p>
                        <p className='texto'>Grupo II</p>
                        <p className='texto'>Grupo III</p>
                        <br></br>
                        <br></br>
                        <div className="opcoes">
                            
                            <Link to="/verbosgrupo1">
                            <div className="opcao1">
                                <p className='tituloopcao'> GRUPO I </p>
                            </div>
                            </Link>

                            <Link to="/verbosgrupo2">
                            <div className="opcao2">
                                <p className='tituloopcao'> GRUPO II </p>
                            </div>
                            </Link>


                            <Link to="/verbosgrupo3">
                            <div className="opcao3">
                                <p className='tituloopcao'> GRUPO III </p>
                            </div>
                            </Link>

                        </div>


                    </main>
                </div>
            <Rodape />
        </div>
    );
}

export default ListaVerbos;