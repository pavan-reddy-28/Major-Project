import React, { useState, useEffect } from 'react'
import { Row, Spinner,Container, Card, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'

import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'

import StateUnionComponent from './StateUnionComponent'
const CentralDashBoard = () => {

    const [skills, setSkills] = useState([])
    const [userSkills, setUserSkills] = useState([])

    const [state, setState] = useState([])
    const [territory, setTerritory] = useState([])

    const [isTerritoryIsLoaded, setTerritoryIsLoaded] = useState(false)
    const [isStateIsLoaded, setStateIsLoaded] = useState(false)
    useEffect(() => {
        console.log("in")
        chatHttpServer.getStatesFromNotification().then(res=>{
            console.log(res);
            let s_details = [];
            for (let i = 0; i < res.length; i++) {
                

                    s_details.push({
                        id:res[i].governmentId,
                        name:res[i].name,
                        value:res[i].value
                                   });
                }


                setState(s_details);
                setStateIsLoaded(true)
        })

        chatHttpServer.getTerritoriesFromNotification().then(res => {
            console.log(res)
            // let s_details = [];
            let t_details = [];
            for (let i = 0; i < res.length; i++) {
                 
                    t_details.push({
                        id:res[i].governmentId,
                        name:res[i].name,
                        value:res[i].value
                                   });
                
            }
            
            setTerritory(t_details);

            setTerritoryIsLoaded(true)







        }).catch(err => {
            console.log(err)
        })

        return () => {
            // alert("unmount")
            console.log('will unmount');
        }


    }, []);





    return (
        <>
            <Row className="pt-4">
                {/* profile Card */}

                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className="  p-3 border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                    <Button

                        className="mx-auto p-1 btn-md"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', fontSize: '30px', width: '240px' }} >
                        {/* Badge */}

                       DASHBOARD
                   </Button>
                    <Card.Body>

                        {isStateIsLoaded ?
                            <StateUnionComponent details={state} type={'States'} />
                            :
                            <Card className="mt-4 p-1 shadow-lg  " style={{ 'borderRadius': '25px' }} >
                              
                                <Card.Body className="mx-auto my-auto" >

                                <Spinner style={{height:'180px',width:'180px'}} animation="border" /> 

                                </Card.Body>
                            </Card>
                        }
                        {isTerritoryIsLoaded ?
                            <StateUnionComponent details={territory} type={'Union Territories'} />
                            :
                            <Card className="mt-4 p-1 shadow-lg  " style={{ 'borderRadius': '25px' }} >
                              
                                <Card.Body className="mx-auto my-auto" >

                                <Spinner style={{height:'180px',width:'180px'}} animation="border" /> 

                                </Card.Body>
                            </Card>


                        }




                    </Card.Body>
                </Card>

                {/* ADD STATE */}
                <Card
                    className="pt-5 border-0 ml-2"
                    style={{ width: '15rem', backgroundColor: 'transparent' }}>

                    <Card.Body >
                        {/* <Card.Title>
                            <Button

                                className="m-3 p-1 btn-md"
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '30px', width: '240px', position: 'fixed', borderWidth: '5px' }} >
                                ADD STATE
                   </Button>
                        </Card.Title> */}
                    </Card.Body>
                </Card>

            </Row>
        </>
    )
}

export default CentralDashBoard