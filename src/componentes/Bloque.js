import React from "react";
import "../estilos/Bloque.css";
import {Link} from 'react-router-dom';

function Bloque(props){
  return(
    <div className="contenedor-bloque">
      
      <div className="texto-bloque">
        <p className="titulo-bloque"><b>{props.titulo}</b></p>
        <p className="subtitulo-bloque">{props.subtitulo}</p>
      </div> 
      <div className="img-bloque">
        <img src={require(`../imagenes/img_${props.imagen}.png`)} alt={props.descripcionImagen} />
      </div>
      
        <button className="boton"><Link to={props.bloque}>Estudiar</Link></button>
      
    </div>
    
  );
}

export default Bloque;