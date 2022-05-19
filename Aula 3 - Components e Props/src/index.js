import react from "react"
import reactDom from "react-dom"
import Button from "./Button"
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./styles.css"

function soma(a, b) {
    alert(a + b)
}

function App() {

    return (
        <div className="App">
            Hello World
            <Button onClick={() => soma(10, 20)} name="Tarso Galvao" />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => soma(40, 20)} name="Tom Galvao" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

/* aponta aonde o app vai fazer render no html*/
const rootElement = document.getElementById("root")
/* chama o render do app na funcao */
/* reactDom.render(App(), rootElement) */
/* chama o render do app no elemento html */
reactDom.render(<App />, rootElement)