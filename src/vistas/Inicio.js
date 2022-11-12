import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player';
import RutaVideo from '../assets/videos/divisionpolitica.mp4'

const obtenerEstilos = makeStyles((tema) => ({
    raiz: {
        width: '100%',
        height: '80vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        }
    },
    superponer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    titulo: {
        paddingBottom: tema.spacing(4),
    }
}
)
);

const Inicio = () => {
    const estilos = obtenerEstilos();
    return (
        <section className={estilos.raiz}>
            <ReactPlayer
                url={RutaVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <div className={estilos.superponer}>
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                >

                    <Typography variant="h6" component="h1" classname={estilos.titulo}>
                        Bienvenidos al Mundo
                    </Typography>
                </Box>
            </div>
        </section >
    );
}

export default Inicio;