
//import React,{Fragment} from "react"; esta opcion es regulera
import PropTypes  from "prop-types";


const PrimeraApp=({nombre,apellidos})=>{
    //const saludo = {nombre:"María",edad:"28"}
    if(!apellidos){
        throw new Error('Te falta el apellido')
    }
    return (
        //<Fragment>
        <>
            <h1>Hola {nombre} {apellidos}</h1>
            <h2>Subtitulo</h2>

        </>
            
        //</Fragment>
            
        
    )
}
PrimeraApp.propTypes={
    nombre: PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    apellidos:"Desconocido"
}
export default PrimeraApp;
