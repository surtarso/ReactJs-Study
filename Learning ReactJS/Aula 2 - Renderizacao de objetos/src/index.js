import react from "react"
import reactDom from "react-dom"
import "./styles.css"

const element = 'Hello World'
const element2 = <h1>Ola mundo!</h1>

function App() {
    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

/* aponta aonde o app vai fazer render no html*/
const rootElement = document.getElementById("root")
/* chama o render do app na funcao */
reactDom.render(App(), rootElement)
/* chama o render do app no elemento html */
/* reactDom.render(<App />, rootElement) */