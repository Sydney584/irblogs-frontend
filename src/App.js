import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import irlogo from './irlogo.png';
import Home from './Components/Home';
import './App.css';
import UserContainer from './Components/UserContainer';


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
       <Route path="/UserContainer">
       <UserContainer />
       </Route>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
