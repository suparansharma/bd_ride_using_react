
import './App.css';
import Header from './components/Header/Header';
import Nomatch from './components/Nomatch/Nomatch';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App" >
   
   <Router>
      

        
        <Switch>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
          </Route>
          <Route path="/login">
          <Header></Header>
          <LogIn></LogIn>
          </Route>
       
        </Switch>
 
    </Router>
     
    </div>
  );
}

export default App;
