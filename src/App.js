import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {
  return (
    
    <>
      <NavBar />
      <ItemListContainer />

      <hr/>
      <ItemDetailContainer/>

      
    </>  
    
        
     
    
  );
}

export default App;
