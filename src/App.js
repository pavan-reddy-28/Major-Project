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
// component imports
import LoginComponet from './Components/LoginComponet/Login'
import Counter from './Components/NavBar/Counter'
import DashBoardCentral from './Components/Dashboard/CentralDashBoard'
import DashBoardState from './Components/Dashboard/StateDashboard'
import NotFound from './Components/not-found/NotFound'
function App() {
  return (
    
    <Router>
      <Counter props={{isAuthenticated:true}}/>
      <Switch>
          {/* <Route path="/" >
            <LoginComponet/>
          </Route> */}
          <Route path="/Login" >
            <LoginComponet/>
          </Route>
          <Route path="/Dashboard" >
            <DashBoardCentral/>
          </Route>
          <Route path="/StateDashboard" >
            <DashBoardState/>
          </Route>
          <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
