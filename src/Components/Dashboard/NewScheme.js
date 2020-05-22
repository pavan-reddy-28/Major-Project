import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Form, Alert, Col, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'
import { withRouter } from 'react-router'
import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';
// import RawE from './MyEditor'
import SchemeComponent from './SchemeComponent'
const NewScheme = (props) => {
    const [textAreaValue, setTeaxtArea] = useState("");
    const [schemeFund, setSchemeFund] = useState('')
    const [schemeTitle, setSchemeTitle] = useState("");
const validation=()=>{

}

    const handler = (e) => {
        e.preventDefault();
        chatHttpServer.addScheme({
            govtId: props.location.state.govtId,
            title: schemeTitle,
            schemeFund: schemeFund,
            description: textAreaValue
        }).then(res => {
            console.log(res)
            if (res.success) {
                alert("Modification Done successfully :)")
                window.location.assign('/stateDashboard')
            }
            else {
                alert("Something is Fishy Check the Code Amigo")
            }
        }).catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        console.log("inside UseEffect")
        

        return () => {
            // alert("unmount")
            console.log('will unmount');
        }


    }, []);



    return (
        <>
            <Row className=" mx-auto pt-4">
                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className=" mx-auto  border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                    <Button

                        className="mx-auto p-2 btn-md"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', fontSize: '30px', width: 'auto' }} >
                        {/* Badge */}

                       NEW SCHEME DETAILS
                   </Button>
                    <Card.Body>
                        {/* //States Card */}
                        <Card className="mt-4 p-1 shadow-lg  " style={{ 'borderRadius': '25px' }} >

                            <Card.Body >
                                <Card.Title className="text-left" >
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>SCHEME TITLE</Form.Label>
                                            <Form.Control type="email" className="border border-top-0 border-left-0 border-right-0"
                                                value={schemeTitle.toUpperCase()}
                                                onChange={(e) => setSchemeTitle(e.target.value + ''.toUpperCase())}
                                                placeholder="Enter Title"
                                                required
                                            />
                                        </Form.Group>
                                    </Form>
                                </Card.Title>
                                <TextareaAutosize className=" mt-4 p-3 border border-top-0 w-100"
                                    value={textAreaValue}
                                    onChange={(e) => { setTeaxtArea(e.target.value) }}
                                    style={{
                                        minHeight: 200, maxHeight: 500, fontSize: '20px',
                                        borderBottomRightRadius: '30px',
                                        borderBottomLeftRadius: '30px'
                                    }}
                                    placeholder="Enter Scheme Details"
                                    required
                                />
                                {/* <RawE></RawE> */}
                                <Form className="ml-3 mt-2 ">
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label style={{ fontSize: '18px' }} column sm="3">
                                            Funds Required :
    </Form.Label>                                        <Col sm="18">
                                            <Form.Control type="number" value={schemeFund}
                                                onChange={(e) => { 
                                                    console.log(schemeFund)
                                                    setSchemeFund(e.target.value) }}
                                                required ={false}
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form>

                            </Card.Body>
                            <Card.Footer>
                                <Button className="mx-auto mb-4 btn-md"
                                    variant="outline-dark"
                                    style={{ 'borderRadius': '20px', width: 'auto' }}
                                    onClick={(e) => handler(e)}
                                >
                                    {/* Badge */}

Submit
</Button>

                            </Card.Footer>

                        </Card>


                    </Card.Body>

                </Card>


            </Row>
        </>
    )
}

export default withRouter(NewScheme)