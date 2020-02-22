import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponet from './Components/LoginComponet/Login'
import Counter from './Components/NavBar/Counter'
function App() {
  return (
    
    <Router>
      <Counter props={{isAuthenticated:true}}/>
      <Switch>
          <Route path="/">
            <LoginComponet/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
