
import './App.css';

import MenuPrincipal from './componentes/MenuPrincipal';
import Rutas from './componentes/Rutas';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MenuPrincipal />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;