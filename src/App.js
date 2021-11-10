import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/layout/ItemListContainer/ItemListContainer';
import { NavBar } from './components/layout/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={ ["Bienvenida a tu tienda online", "¡Descubrí la temporada 2022!"]  } />
     
    </>
  );
}

export default App;
