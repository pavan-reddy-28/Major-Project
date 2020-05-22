import React, { Component, useState, useEffect } from 'react'
import { Row, Container, Card, Form, Alert, Col, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'
import { withRouter } from 'react-router'
import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';
// import RawE from './MyEditor'
import SchemeComponent from './SchemeComponent'




class AddScheme extends Component {
constructor(props) {
super(props)
console.log(this.props.location.state.stateName)
this.state = {
    textAreaValue: this.props.location.state.description,
    title: this.props.location.state.title,
    isLoaded: false,
    fundsDisbursed: this.props.location.state.fundsDisbursed,
    approved: this.props.location.state.approved,
    from: this.props.location.state.from,
    stateName:this.props.location.state.stateName
}
chatHttpServer.userSessionCheck()
    .then(res => {
        if (!res.isAuthenticated)
            window.location.assign('/')
    })
}

handler(e,data){
    e.preventDefault();
    chatHttpServer.updateScheme({
        id: this.props.location.state.schemeId,
        approved:data,
        govt:"central"

    }).then(res => {
        console.log(res)
        if (res.success) {
            alert("Modification Done successfully :)")
            // window.location.assign('/stateDashboard')
            window.location.assign('/stateDashboard')
        }
        else {
            alert("Something is Fishy Check the Code Amigo")
        }
    }).catch(err => {
        console.log(err)
    });
}



render() {
return (
    <>
        {
            this.props.location.state ?
                <>
                    <Row className=" mx-auto pt-4">
                        {/* STATES AND  UNINON TERRITORY CARD*/}


                        <Card
                            className="pt-5 border-0 ml-2 "
                            style={{ width: '12rem', backgroundColor: 'transparent' }}>
                            <Card.Title>

                            </Card.Title>
                            <Card.Body>

                                {
                                    this.state.approved === 1 || this.state.from === 'central' ? 
                                    <>
                                    <Link
            to={{
                pathname:'/Discussion',
                state:{
                    schemeId :this.props.location.state.schemeId,
                    title: this.props.location.state.title,
                    budget :  this.props.location.state.fundsDisbursed,
                    stateName:this.state.stateName,
                    approved:this.state.approved
                }
            }}
            style={{ color: '#000', textDecoration: 'none' }}
            >

                                         <Button
                                className= " h-25 p-4  mt-4"
                                variant="outline-dark"
                                style={{ 'borderRadius': '25px',width:'230px', fontSize: '25px', borderWidth: '5px',height:'100px',position:'fixed' }}
                            >
                                <i  className="far fa-comment-dots mx-auto w-100" style={{color:'black'}}/>
                                
                              <span>GO TO DISSCUSSION</span> 
                 </Button>
                 </Link>
                                    </>
                                        :

                                        <ButtonToolbar style={{ position: 'fixed', width: '250px' }}>
                                            <Link
                                                to={{
                                                    pathname: '/editScheme',
                                                    state: {
                                                        title: this.props.location.state.title,
                                                        description: this.props.location.state.description,
                                                        fundsDisbursed: this.props.location.state.fundsDisbursed,
                                                        schemeId: this.props.location.state.schemeId,
                                                        approved: this.props.location.state.approved
                                                    }
                                                }}
                                                style={{ color: '#000', textDecoration: 'none' }}
                                            >
                                                <Button
                                                    className={" addSchemeButton   mt-4    "}
                                                    variant="outline-dark"
                                                    style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}

                                                //  onClick={()=>download('on.json', 'text/plain')}
                                                >
                                                    MODIFY SCHEME
            </Button>
                                            </Link>
                                            <Link
            to={{
                pathname:'/Discussion',
                state:{
                    schemeId :this.props.location.state.schemeId,
                    title: this.props.location.state.title,
                    budget :  this.props.location.state.fundsDisbursed,
                    stateName:this.state.stateName,
                    approved:this.state.approved
                }
            }}
            style={{ color: '#000', textDecoration: 'none' }}
            >

<Button
                                                    className={" addSchemeButton   mt-4    "}
                                                    variant="outline-dark"
                                                    style={{ 'borderRadius': '20px', fontSize: '22px', borderWidth: '5px' }}

                                                //  onClick={()=>download('on.json', 'text/plain')}
                                                >
                                                    
           
                                <i  className="far fa-comment-dots mx-auto w-100" style={{color:'black'}}/>
                                
                              <span>GO TO DISSCUSSION</span> 
                 </Button>
                 </Link>
                                        </ButtonToolbar>
                                }
                            </Card.Body>
                        </Card>
                        <Card className=" mx-auto  border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                            <Button

                                className="mx-auto p-2 btn-md"
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '30px', width: 'auto' }} >
                                {/* Badge */}

                SCHEME DETAILS
            </Button>
                            <Card.Body>
                                {/* //States Card */}
                                {/* <StateUnionComponent details={{ skills: skills, userSkills: userSkills, type: 'States' }}></StateUnionComponent> */}

                                {/* UNION TERRITORY CARD */}

                                <Card className="mt-4 p-1 shadow-lg  " style={{ 'borderRadius': '25px' }} >

                                    <Card.Body >
                                        <Card.Title className="text-left" style={{ fontSize: '40px' }} >
                                            {this.state.title}
                                        </Card.Title>
                                        <TextareaAutosize className=" mt-2 p-3 border border-top-0 w-100"
                                            value={this.state.textAreaValue}
                                            style={{
                                                maxHeight: 500, fontSize: '20px',
                                                borderBottomRightRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                            disabled />
                                        {/* <RawE></RawE> */}
                                        <Form className="ml-3 mt-2 ">
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label style={{ fontSize: '18px' }} column sm="3">
                                                    Funds Required
</Form.Label>
                                                <Col sm="18">
                                                    <Form.Control type="number" value={this.state.fundsDisbursed} disabled />
                                                </Col>
                                            </Form.Group>
                                        </Form>

                                    </Card.Body>
                                    <Card.Footer>
                                        {
                                            this.state.from === 'stateOrUnion' ?
                                                this.state.approved == 1 ?
                                                    <Alert variant='success'>
                                                        This Scheme has Approved!
                                        </Alert>
                                                    : this.state.approved == -1 ?
                                                        <Alert variant='danger'>
                                                            This Scheme is Rejected!
                                            </Alert>
                                                        :
                                                        <Alert variant='warning'>
                                                            Pending!
                                                </Alert>
                                                : <>
                                                {
                                                 
                                                   this.state.approved == 1 ?
                                                       <Alert variant='success'>
                                                           This Scheme has Approved!
                                           </Alert>
                                                       : this.state.approved == -1 ?
                                                           <Alert variant='danger'>
                                                               This Scheme is Rejected!
                                               </Alert>
                                                           :
                                                           <Alert variant='warning'>
                                                               Pending!
                                                   </Alert> 
                                                }
                                            <ButtonToolbar>
                                            <Button className="mx-auto mb-4 btn-md"
                                            variant="outline-success"
                                            style={{ 'borderRadius': '20px', width: 'auto' }}
                                                                   
                                            onClick={(e)=>this.handler(e,1)}
                                            disabled={
                                                this.state.approved==1?true:false
                                            }
                                            >
                                            Accept Scheme
                                            </Button>
                                            <Button className="mx-auto mb-4 btn-md"
                                            variant="outline-danger"
                                            style={{ 'borderRadius': '20px', width: 'auto' }}
                                            onClick={(e)=>this.handler(e,-1)}
                                            disabled={
                                                this.state.approved==-1?
                                                true:
                                                this.state.approved==1?
                                                true:false
                                            }            
                                                        >
                                            Reject Scheme
                                            </Button>


                                                    </ButtonToolbar>


                                                </>
                                        }
                                    </Card.Footer>
                                </Card>


                            </Card.Body>
                        </Card>


                    </Row>
                </>
                :
                <Redirect to="/stateDashboard" />
        }
    </>
)
}
}

export default withRouter(AddScheme)