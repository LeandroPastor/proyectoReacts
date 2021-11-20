import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {
  return (
      
      
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/categorias/:categoryId" element= { <ItemListContainer /> } />
          <Route path="/detalle/:productoId" element= { <ItemDetailContainer /> } />

          <Route path="*" element={ <Navigate to="/" /> } />
        

        

        </Routes>    
      
      </BrowserRouter>

    
    
  );
}

export default App;
