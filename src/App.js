import irlogo from './irlogo.png';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
      <Router>
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        <img src={irlogo} className="App-logo" alt="logo" />
        
        
        <Switch>
     <Route exact path="/">
       <Home />
       </Route>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
