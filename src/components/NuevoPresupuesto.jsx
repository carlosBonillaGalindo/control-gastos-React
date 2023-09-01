import {useState} from "react";
import Message from "./Message";

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) =>{
        e.preventDefault();
        
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto válido');
        }else{
            console.log('Si es un presupuesto válido');
        }


    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input 
                        type="text" 
                        className="nuevo-presupuesto"
                        placeholder="Añde tu Presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Message tipo="error">{mensaje}</Message>}
                 
            </form>

        </div>
    )
}

export default NuevoPresupuesto