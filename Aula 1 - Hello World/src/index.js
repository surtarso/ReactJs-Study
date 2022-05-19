import react from "react"
import reactDom from "react-dom"
import "./styles.css"

/* funcao JSX */
function primeiroJSX() {
    return (
        <div className="teste">
            Tarso Galvão - ReactJS "Hello World!"
        </div>
    )
}

/* funcao main do app */
const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

/* aponta aonde o app vai fazer render no html*/
const rootElement = document.getElementById("root")
/* chama o render do app no elemento html */
reactDom.render(<App />, rootElement)