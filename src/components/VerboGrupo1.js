import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import listaVerbos from "./Grupo1.json"; // Importa a lista de verbos

const VerboGrupo1 = () => {
    return (
        <div>
            <Cabecalho />

            <h1 className="tituloVerbo">Lista de Verbos - Grupo I</h1>

            <p className="textoVerbo"> Esta lista contém 893 palavras. </p>

            <div className="container">
            <div className="containerVerbos">
            <ol>
                {listaVerbos.map((verbo) => (
                    <li key={verbo.id}>
                        <p className="kanji">{verbo.Vocabulary}</p>
                        <p  className="textoTraducao">{verbo.Translation}</p>
                        <p><b>{verbo.Vocabulary} [{verbo.Pronunciation}]</b> {verbo["Word-Type"]}</p>
                        <p>{verbo.WordType}</p>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        {/* Adicione outras informações conforme necessário */}
                    </li>
                ))}
            </ol>
            </div>
            </div>
            <Rodape />
        </div>
    );
}

export default VerboGrupo1;
