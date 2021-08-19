import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
    <Router >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
