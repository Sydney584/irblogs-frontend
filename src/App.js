import irlogo from './irlogo.png';
import Navbar from './Components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={irlogo} className="App-logo" alt="logo" />
        <p>
          Welcome to The IndigoRoom Blogs
        </p>
      
      </header>
    </div>
  );
}

export default App;
