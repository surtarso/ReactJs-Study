import {useState} from 'react';

function Smartcounter (){
    //retorna um vetor:
    //uma variavel stateful (guarda elemento)
    //uma funcao amarrada a essa variavel que atualiza esse valor
    const [quantity, upQuantity] = useState(1)

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>+</button>
        </>
    )
}

export default Smartcounter;