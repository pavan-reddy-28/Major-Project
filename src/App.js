import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// component imports
import LoginComponet from './Components/LoginComponet/Login'
import NavBar from './Components/NavBar/Counter'
import DashBoardCentral from './Components/Dashboard/CentralDashBoard'
import DashBoardState from './Components/Dashboard/StateDashboard'
import AddScheme from './Components/Dashboard/ViewScheme'
import EditScheme from './Components/Dashboard/EditScheme'
import NewScheme from './Components/Dashboard/NewScheme'
import CentralSchemeViewer from './Components/Dashboard/CentralStateSchemeView'
import NotFound from './Components/not-found/NotFound'
import chatHttpServer from './utils/chatHttpServer';
import Discussion from './Components/Discussions/Discussion'
// import MyEditor from './Components/Editor/MyEditor'


function App() {
  
const [authenticated, setauthenticated]=useState(false);

const [type,setType] = useState(' ')
const [govtName,setGovtName] =useState('')
const [centralAuthenticated , setCentralAuthenticated] = useState(false)
const [govtId,setGovtId]=useState('0')

const authenticateHandler = (value)=>{
  console.log('value ::::' + value)
  setauthenticated(value)
};

useEffect(() => {

  chatHttpServer.userSessionCheck().then(res=>{
  console.log('isAuthenticated app.js ::: '+res.isAuthenticated)
  setauthenticated(res.isAuthenticated)
  try {
    console.log(res.user)
    setGovtName(res.user.name)
  setGovtId(res.user.id)
  setType(res.user.type)
  } catch (error) {
    
  }
  console.log(authenticated)
  });
  return () => {
    // cleanup
  }
}, [authenticated])

  return (
    
    <Router>
         <NavBar isAuthenticated={authenticated} logoutHandler ={(e)=>authenticateHandler(e)}/>
      {/* <Counter props={{isAuthenticated:true}}/> */}
      <Switch>

          <Route
          path='/login'
          render ={()=>{
            if(!authenticated){
                return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>
            }else{
              if(type==='central')
                return (<DashBoardCentral></DashBoardCentral>)
              else
                return <DashBoardState isAuthenticated={authenticated} Id = {govtId} />
            } 
          }}
          />
          
          <Route
          path='/stateDashboard'
          render ={()=>{
            if(!authenticated){
                return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>
            }else{
              if(type==='central'){
                console.log("dashboard central")
                return (<DashBoardCentral></DashBoardCentral>)
              }
            else{
              console.log("dashboard state")
                return <DashBoardState isAuthenticated={authenticated} Id = {govtId} />
            }
            } 
          }}
          />
          <Route 
            path="/schemeDetails" 
            render = {()=>{
              if(!authenticated){
              return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>}else{return <AddScheme/>}   
            }

            }
            />
            {/* <AddScheme/>
          </Route> */}
          {/* <Route path="/editScheme" >
            <EditScheme/>
          </Route> */}
          
          <Route 
            path="/editScheme" 
            render = {()=>{
              if(!authenticated){
              return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>}else{return <EditScheme/>}   
            }
            }
            />
            <Route 
            path="/addScheme" 
            render = {()=>{
              if(!authenticated){
              return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>}else{return <NewScheme/>}   
            }
            }
            />
            
            
            <Route path="/CentralStateSchemeDetails" exact render ={()=>{
            if(!authenticated){
                return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>
            }else{
              return <CentralSchemeViewer/>
              
            } 
          }}
          
          />
          <Route path="/Discussion" exact render ={()=>{
            if(!authenticated){
                return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>
            }else{
              return <Discussion name={govtName}/>
              
            } 
          }}
          
          />


          <Route path="/" exact render ={()=>{
            if(!authenticated){
                return <LoginComponet loginHandler  ={(e)=>authenticateHandler(e)}/>
            }else{
              return <DashBoardState isAuthenticated={authenticated} Id = {govtId} />
            } 
          }}
          
          />
          <Route  component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
