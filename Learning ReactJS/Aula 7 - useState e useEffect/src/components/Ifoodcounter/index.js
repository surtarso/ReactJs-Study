import React, {useState, useEffect} from 'react'

export default function Ifoodcounter() {
    const [value, setValue] = useState(1)

    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])

    function down(){
            if(value > 0){
            setValue(value - 1)
        }
    }

    function up(){ 
        setValue(value + 1)
    }

    return (
        <div>
            <button onClick={down}>
                -
            </button>
            <p>{value}</p>
            <button onClick={up}>
                +
            </button>
            <br />
            <button id='moeda'></button>
            
        </div>
  )
}
