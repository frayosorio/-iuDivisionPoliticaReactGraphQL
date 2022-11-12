import { Routes, Route } from 'react-router-dom'

import Paises from '../vistas/Paises'
import Inicio from '../vistas/Inicio'


const Rutas = () => {

    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/paises' element={<Paises />} />
            
        </Routes>
    );
}

export default Rutas;