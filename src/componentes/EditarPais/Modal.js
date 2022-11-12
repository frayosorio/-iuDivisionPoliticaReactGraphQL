import {
    Dialog,
    DialogTitle
} from "@material-ui/core"
import Formulario from "./Formulario";

const ModalEditar = ({ estado, cerrar, pais }) => {
    return (
        <Dialog open={estado} onClose={cerrar} >
            <DialogTitle>
                {pais.id > 0 ? `Modificando el país ${pais.nombre}` : 'Agregando un nuevo país'}
            </DialogTitle>
            <Formulario cerrarFormulario={cerrar} paisEditado={pais} />
        </Dialog>
    );
}

export default ModalEditar;