import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import irlogo from './irlogo.png';
import Home from './Components/Home';
import './App.css';
import UserContainer from './Components/UserContainer';
import BlogpostContainer from './Components/BlogpostContainer';


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
       <Route path="/BlogpostContainer">
       <BlogpostContainer />
       </Route>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
