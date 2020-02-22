import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap/';
import './style.css'
import { Redirect, Link } from 'react-router-dom'

const Title = () => {
  return (
    <h1>
      Central State Fund Transfer
    </h1>
  )
}

function Counter(props) {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className=" row pl-3 pr-3 pt-0 pb-0  mx-auto">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-sm-4">

            {/* Home  ICON*/}
            <Link to={{
              pathname: '/Home',
            }} style={{ color: '#000', textDecoration: 'none' }}>
              <Nav className="row ml-1 pt-1" title="Sign Up">
                <span className="col fas fa-home " style={{ 'fontSize': '24px' }}></span>
                <span className="w-100"></span>
                <span className='col' style={{ 'fontSize': '14px' }}>Home</span>
              </Nav>
            </Link>
          </Nav>
          <Navbar.Brand className="col-sm-7 " href="#home"><Title></Title></Navbar.Brand>
          <Nav className=" " style={{ 'marginTop': '10px' }}>
            {
              props.isAuthenticated ?
                <>



                  {/* LOGOUT ICON */}
                  <Link to={{
                    pathname: '/Home',
                  }} style={{ color: '#000', textDecoration: 'none' }}>
                    <Nav className="row p-1" title="Logout">
                      <span className="col  fas fa-sign-out-alt  "
                        style={{ 'fontSize': '24px' }}>
                      </span>
                      <span className="w-100"></span>
                      <span className="col  " style={{ 'fontSize': '14px' }}>Logout</span>
                    </Nav>
                  </Link>
                </>
                :
                 <>
                 {/* LOGIN ICON */}
                 <Link to={{
                  pathname: '/Login',
                }}
                  style={{ color: '#000', textDecoration: 'none' }}>
                  <Nav className="row p-1 " title="Log In" >

                    <span className="col fas fa-sign-in-alt  "
                      style={{ 'fontSize': '24px' }}>
                    </span>
                    <span className="w-100"></span>
                    <span className="col  " style={{ 'fontSize': '14px' }}>LogIn</span>
                  </Nav>
                </Link>


                </>}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Counter


