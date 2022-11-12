import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Confirmacion = ({ titulo, mensaje, open, aceptar, cerrar }) => {
    return (
        <Dialog open={open} onClose={cerrar}
            maxWidth="sm" fullWidth>
            <DialogTitle>{titulo}</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={cerrar}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{mensaje}</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={cerrar}>
                    No
                </Button>
                <Button color="secondary" variant="contained"
                    onClick={() => {
                        if (aceptar) {
                            aceptar();
                        }
                        cerrar();
                    }}>
                    Sí
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Confirmacion;