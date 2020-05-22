
import React, { useState, Component, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ChatHttpServer from '../../utils/chatHttpServer';
import { withRouter } from 'react-router';
import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import { Redirect } from 'react-router'
import './styler.css'



function Login(props){
  const loginHandler = ()=>{
    props.loginHandler(true);
}
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const[hashedPassword,sethashedPassword] = useState("")
 

  async function handleLogin(event) {
    event.preventDefault();
    let hashedPassword=CryptoJS.MD5(password).toString(CryptoJS.enc.Hex);
    
    console.log(hashedPassword)
    try {
      const response = await ChatHttpServer.login({ 'id': username, 'password': hashedPassword });
      console.log(' response is :::::: '+response)
      if (!response.isAuthenticated) {
        console.log(response)
        //props.isAuthenticated(response.isAuthenticated)
        alert(response.message)
      } else {
        
        console.log(response)
        loginHandler()
        window.location.assign('/stateDashboard')
       // props.p.history.push('/Home')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div className='card-body text-center C-B' >
                <h5 className="card-title text-center C-T">Login </h5>
                <Carousel slide={false} indicators={false} id="quote-carousel" interval={false} controls={false} >


                  {/* Roll-Number Slide */}                  
                  {/* FirstName LastName MiddleName Slide */}
                  {/* Mail Password Confirm Password */}     


                  <Carousel.Item >
                    <form className="form-signin " style={{ 'marginLeft': '45px' }} >
                      {/* First Name  */}
                      <div className=" name form-label-group  " style={{ 'width': '85%' }}>
                        <input
                          type="text" id="inputUsername" className="form-control text-center"
                          placeholder="State Id" autoCapitalize={"characters"}
                          autoComplete="username"
                          value={username}
                          onChange={(event) => { setUsername(event.target.value) }}
                          required />
                        <label htmlFor="inputUsername" >State ID</label>
                      </div>
                      {/* Password */}
                      <div className=" name form-label-group " style={{ 'width': '85%' }} >
                        <input
                          type="password" id="inputPassword" className="form-control text-center"
                          placeholder="Password" autoComplete="current-password"
                          value={password}
                          onChange={(event) => { setPassword(event.target.value) }}
                          required />
                        <label htmlFor="inputPassword" >Password</label>
                      </div>
                      <Button
                        className="btn3d btn btn btn-lg"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', 'marginLeft': '-30px' }}
                        onClick={(e) => handleLogin(e)}
                      >LOGIN</Button>
                    </form>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default withRouter(Login)