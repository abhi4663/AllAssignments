
import logo from './logo.svg';
import NavBar from './components/Main';
import { MovieProvider } from './reducer/useContext';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (

    <div className="App">
      <MovieProvider>
        <NavBar />
      </MovieProvider>
    </div>


  );
}

export default App;
