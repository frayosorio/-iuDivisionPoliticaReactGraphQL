import { ApolloClient, InMemoryCache } from "@apollo/client"


const IniciarClienteApolo = ({ ruta }) => {

    return new ApolloClient(
        {
            uri: ruta,
            cache: new InMemoryCache()
        }
    );

}

export default IniciarClienteApolo;