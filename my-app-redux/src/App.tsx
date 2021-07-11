// import './App.css';
import NoteToolbar from './Components/NoteToolbar';
import NoteList from './Components/NoteList';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App m-5">
      <NoteToolbar />
      <NoteList />
    </div>
  );
}

export default App;
