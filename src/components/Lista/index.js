import React from 'react'

function Lista(props){
    return(

        <div>
        <p>  {props.texto}</p>
        <img src={props.imagem}></img>

        </div>
    )

}

export default Lista