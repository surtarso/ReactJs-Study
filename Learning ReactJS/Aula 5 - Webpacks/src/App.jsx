import React from "react";
import Button from "./Button";

const buttonA = <button>historico</button>
const buttonB = <button>cadastrar cliente</button>
var hasCustomer = true


const App = () => {

    const renderShowHistory = () => (
        <div>
            Mostrar Historico
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Adicionar Cliente
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <h1>Nome: Tarso Galvao</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Instrução ao ReactJS</p>
            <p>Aula 5 - Webpacks + Babel</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
            <br />
            <Button />
        </div>
    );
};

export default App;