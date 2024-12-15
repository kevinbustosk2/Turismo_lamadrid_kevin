import { useState } from "react";
import { useEffect } from "react";

// import json_destinos from "../datos/destinos.json";
const URL_SERVICIO_DESTINOS = "http://localhost:3008/destinos";

const Destinos = ({ nombre, categoria }) => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch(URL_SERVICIO_DESTINOS)
      .then((respuesta) => respuesta.json())
      .then((respuestaDestinos) => {
        setDestinos(respuestaDestinos);
      })
      .catch((error) => {
        console.error("Error al obtener destinos: " + error);
      });
  }, []);

  console.log(destinos);

  return (
    <div>
      {destinos.map((destino) => {
        if (
          (nombre === "" && categoria === "") ||
          (nombre === "" && destinos.categoria.toLowerCase() === categoria) ||
          (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) != -1 &&
            categoria === "") ||
          (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) != -1 &&
            destino.categoria.toLowerCase() === categoria.toLowerCase())
        ) {
          console.log("En el IF");
          return (
            <>
              <div key={destino.id} id={destino.id}>
                <h1 id="nombre">
                  Nombre: <b>{destino.nombre}</b>
                </h1>
                <h2 id="descripcion">Descripción: {destino.descripcion}</h2>
                <h3 id="categoria">Categoría: {destino.categoria}</h3>
                <p id="referencia">Ubicación: {destino.referencia}</p>
                <p id="direccion">{destino.direccion}</p>
                <a
                  id="enlace_google_maps"
                  href={destino.enlace_google_maps}
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Ver en Google Maps
                </a>
                {destino.imagenes.map((imagen) => {
                  return (
                    <img
                      key={imagen}
                      src={imagen}
                      alt="Imagen de referencia"
                    ></img>
                  );
                })}
                <p id="horarios">Horario: {destino.horarios}</p>
                <a
                  id="url"
                  href={destino.url}
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Sitio Web
                </a>
                <br />
                <br />
                <hr />
                <br />
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Destinos;
