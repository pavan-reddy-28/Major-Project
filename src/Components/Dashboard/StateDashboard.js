import React, { useState, useEffect } from 'react'
import { Row, Container, Badge, Card, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'

import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'

import SchemeComponent from './SchemeComponent'
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
const StateDashBoard = (props) => {

    const [isLoaded, setisLoaded] = useState(false)

    const[schemeTitles,setschemeTitles]=useState([])

    const [addSchemeSlider, setaddSchemeSlider] = useState(true)
    const [allSchemes, setAllSchemes] = useState(true)
    const [acceptedSchemes, setAcceptedSchemes] = useState(true)
    const [rejectedSchemes, setRejectedSchemes] = useState(true)
    const [govtName, setGovtName] = useState('')
    useEffect(() => {
        console.log("in")
        console.log(props.isAuthenticated)
        chatHttpServer.userSessionCheck().then(res=>{
                console.log((res.user.name));
                setGovtName(res.user.name)
        }).catch(err=>{

        })
            if(props.Id!==2000){
            chatHttpServer.getSchemeById({id : props.Id}).then(res=>{
                // setschemeTitles(res)
                console.log(res)
              
                setschemeTitles(res)
                setisLoaded(true)
            

            }).catch(err=>{console.log(err)});
        }
        else{

        }
        return () => {
         
            
            
            console.log('will unmount');
        }


    },[isLoaded]);

   




    return (
        <>
            {
                props.Id!==2000?
            <Row className=" mx-auto pt-4">
                {/* profile Card */}

                {/* ADD STATE */}
                <Card
                    className="pt-5 border-0 ml-2 mx-auto"
                    style={{ width: '15rem', backgroundColor: 'transparent' }}>
                    <Card.Title>

                    </Card.Title>
                    <Card.Body>
                        <ButtonToolbar style={{ position: 'fixed', width: '260px' }}>
                            
                        <Link
                            to={{
                            pathname:'/addScheme',
                            state:{
                                    govtId : props.Id
                                  }
                               }}
                        style={{ color: '#000', textDecoration: 'none' }}
                        >
                            <Button
                                className={addSchemeSlider ? " addSchemeButton   mt-4    " : "addSchemeButtonEffect mt-4  "}
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}
                                onMouseEnter={() => { setaddSchemeSlider(false) }}
                                onMouseLeave={() => { setaddSchemeSlider(true) }}
                            //  onClick={()=>download('on.json', 'text/plain')}
                                >
                                    ADD SCHEME
                             </Button>
                            </Link>



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
                                        from={'stateOrUnion'}
                                        name={govtName}
                                        >
                                    </SchemeComponent>))
                                :
                                ''
                        }

                    </Card.Body>
                </Card>


            </Row>
            :
            <Redirect to="stateDashBoard"/>
            
            }
        </>
    )
}

export default StateDashBoard