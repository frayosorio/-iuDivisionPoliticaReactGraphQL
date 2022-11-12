import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Box, List, ListItem, ListItemText, Drawer } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }

    })
);

const MenuPrincipal = () => {
    const estilos = obtenerEstilos();

    //manejo del estado del menú
    const [estadoMenu, setEstadoMenu] = useState(false);

    //rutina que activa el despliegue del menú
    const mostrarMenu = (estado) => () => {
        setEstadoMenu(estado);
    }

    const menu = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={mostrarMenu(false)}
        >
            <List>
                {
                    ['Paises', 'Regiones', 'Ciudades'].map((texto, indice) => (
                        <ListItem button component="a" href={`/${texto}`}>
                            <img src={require(`../assets/iconos/${texto}.png`)} />
                            <ListItemText primary={texto} />
                        </ListItem>
                    )
                    )
                }

            </List>
        </Box>
    )

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria_label="Menu Principal"
                    className={estilos.botonMenu}
                    onClick={mostrarMenu(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={estilos.titulo}>
                    Países del Mundo
                </Typography>
            </Toolbar>
            <Drawer
                anchor="left"
                open={estadoMenu}
                onClose={mostrarMenu(false)}
            >
                {menu()}
            </Drawer>
        </AppBar>




    )
}

export default MenuPrincipal