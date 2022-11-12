import { makeStyles } from "@material-ui/core";
import { Pais, Region } from "../modelos/modelos";
import { gql } from "@apollo/client"
import IniciarClienteApolo from "./IniciarClienteApolo";

export const clienteGQLPais = IniciarClienteApolo({ ruta: "http://localhost:3010/gqlpais" });
export const clienteGQLRegion = IniciarClienteApolo({ ruta: "http://localhost:3010/gqlregion" });

export const obtenerEstilos = makeStyles(tema => ({
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#55ff55",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        padding: "10px 10px",
        fontSize: "18px"
    }
}));


export const obtenerEstilosModal = makeStyles(tema => ({
    base: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: tema.spacing(2),

        '& .MuiTextField-root': {
            margin: tema.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: tema.spacing(2),
        },
    },
}));


export const listarPaises = async () => {
    //Consultar la lista de paises desde la API

    const consulta = gql`{obtenerPaises { id, nombre, continente, codigoAlfa2, codigoAlfa3, tipoRegion }}`;

    var paises = [];
    await clienteGQLPais
        .query({ query: consulta })
        .then(({ error, data }) => {
            if (error) {
                throw new Error(error);
            }
            paises = data.obtenerPaises.map((item) => {
                return new Pais(item.id,
                    item.nombre,
                    item.codigoAlfa2,
                    item.codigoAlfa3,
                    item.tipoRegion,
                    item.continente
                )
            });
        });
    return paises;
}

/*
export const listarRegiones = (idPais) => {
    //Consultar la lista de paises desde la API
    return fetch(`http://localhost:3030/regiones/${idPais}`,
        {
            method: "GET",
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error, estado=${res.status}`);
            }
            return res.text();
        })
        .then((data) => {
            return data.length == 0 ? '{}' : JSON.parse(data);
        })
        .then((json) => {
            var regiones = [];
            if (json != '{}') {
                json.map((item, indice) => {
                    regiones.push(new Region(indice,
                        item.nombre,
                        item.area,
                        item.poblacion
                    ));
                });
            }
            return regiones;
        })
        .catch(function (error) {
            window.alert(`Error consultando regiones [${error}]`);
        });
}
*/