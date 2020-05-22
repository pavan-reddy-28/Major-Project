import React, { useState, useEffect } from 'react'
import { Row, Container, Badge, Card, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'

import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import SchemeComponent from './SchemeComponent'
// var myJSON = '{"name":"John", "age":31, "city":"New York"}';
const StateDashBoard = (props) => {

    const [isLoaded, setisLoaded] = useState(false)

    const[schemeTitles,setschemeTitles]=useState([])

    const [allSchemes, setAllSchemes] = useState(true)
    const [acceptedSchemes, setAcceptedSchemes] = useState(true)
    const [rejectedSchemes, setRejectedSchemes] = useState(true)
    useEffect(() => {
        console.log(props.location.state);
        // console.log(props.isAuthenticated)
        if(props.location.state){
            chatHttpServer.getSchemeById({id : props.location.state.Id}).then(res=>{
                // setschemeTitles(res)
                console.log(res)
              
                setschemeTitles(res)
                setisLoaded(true)
            

            }).catch(err=>{console.log(err)});
        }
        else{

        }
        return () => {
            //  p;("unmount")
            
            
            console.log('will unmount');
        }


    },[isLoaded]);

   



    return (
        <>
   { props.location.state?
            <Row className=" mx-auto pt-4">
        
       
                <Card
                    className="pt-5 border-0 ml-2 mx-auto"
                    style={{ width: '15rem', backgroundColor: 'transparent' }}>
                    <Card.Title>

                    </Card.Title>
                    <Card.Body>
                        <ButtonToolbar style={{ position: 'fixed', width: '260px' }}>
                           



                            <Button
                                className={allSchemes ? " addSchemeButton   mt-4    " : "addSchemeButtonEffect mt-4  "}
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}
                                onMouseEnter={() => { setAllSchemes(false) }}
                                onMouseLeave={() => { setAllSchemes(true) }}
                            >
                                All Schemes
                 </Button>
                            <Button
                                className={acceptedSchemes ? " addSchemeButton   mt-4    " : "addSchemeButtonEffect mt-4  "}
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}
                                onMouseEnter={() => { setAcceptedSchemes(false) }}
                                onMouseLeave={() => { setAcceptedSchemes(true) }}
                            >
                                Accepted Schemes
                 </Button>
                            <Button
                                className={rejectedSchemes ? " addSchemeButton   mt-4    " : "addSchemeButtonEffect mt-4  "}
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}
                                onMouseEnter={() => { setRejectedSchemes(false) }}
                                onMouseLeave={() => { setRejectedSchemes(true) }}
                            >
                                Rejected Schemes
                 </Button>
                        </ButtonToolbar>

                    </Card.Body>
                </Card>


                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className=" mx-auto  border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                    <Button

                        className="mx-auto p-1 btn-md"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', fontSize: '30px', width: '240px' }} >
                        {/* Badge */}

                        State Schemes
                   </Button>
                    <Card.Body className="text-left">
                        {
                            isLoaded ?
                                schemeTitles.map((i, j) => (
                                    <SchemeComponent
                                        key={j}
                                        details={i}
                                        from='central'
                                        name={'central'}
                                    >
                                    </SchemeComponent>))
                                :
                                ''
                        }

                    </Card.Body>
                </Card>


            </Row>:
            <Redirect to="/stateDashboard"/>
                    }
        </>
                    
    )
}

export default withRouter(StateDashBoard)