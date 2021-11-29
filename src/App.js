import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './router/AppRouter';



function App() {
  return (
      
      
      <BrowserRouter>

        <NavBar />

        <AppRouter />

      </BrowserRouter>

    
    
  );
}

export default App;
