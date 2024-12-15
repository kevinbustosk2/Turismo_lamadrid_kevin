import React, { useState } from "react";
import Destinos from "../components/Destinos";

const turismo = () => {
    const [nombreQuery, setNombreQuery] = useState("");
    const [categoriaQuery, setCategoriaQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        setNombreQuery(event.target[0].value);
        setCategoriaQuery(event.target[1].value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSearch}>
 <input type="text" name='nombre' placeholder='museo,hotel,balneario..' style={{borderColor:"black", border:"solid", textAlign: "center", fontSize: "1rem", marginTop: "4rem", marginBottom: "4rem", fontWeight: "bold"}} />
        <input type="text" name='categoria' placeholder='paseos,hospedaje...' style={{borderColor:"black", border:"solid", textAlign: "center", fontSize: "1rem", marginTop: "4rem", marginBottom: "4rem", fontWeight: "bold"}} /> 
             <button type="submit"> Busqueda </button>

            </form>
            <Destinos nombre={nombreQuery} categoria={categoriaQuery} />
        </div>
    )
}

export default turismo;