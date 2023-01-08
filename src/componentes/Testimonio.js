import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props){
    return(
        <div className='contenedor-principal'>
            <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)} alt='foto1'></img>
            <div className='contenedor-testimonio'>
            <p className='nombre-testimonio'>
               <strong>{props.nombre}</strong> en {props.pais}
                </p>
            <p className='cargo-testimnio'>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
           
        </div>
    )
}


export default Testimonio;