import React from "react";

function ComponenteB(props) {
    return (
        <div>
            Componente B
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteB