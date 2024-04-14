import React from "react";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "./niveis-jlpt.css";

const N1Kanji = () => {
    return (
        <div>
            <Cabecalho />
                <div className="container-conteudo">
                    <div className="container-jlpt-50">
                        <h1 className="titulo"> JLPT N1 - Kanji </h1>
                        <p className="texto">Para o nível N1 são considerados (???) kanjis como conhecimento básico. </p>

                        <br></br>
                        <br></br>

                        <div className="container-lista-jlpt-kanji-vocabulario">
                            <div className="lista-jlpt-kanji-vocabulario">
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default N1Kanji;