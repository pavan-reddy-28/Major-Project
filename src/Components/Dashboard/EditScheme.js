import React, { useState, useEffect } from 'react'
import { Row, Container, Card, Form, Alert, Col, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'
import { withRouter } from 'react-router'
import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';
// import RawE from './MyEditor'
import SchemeComponent from './SchemeComponent'
const EditScheme = (props) => {
    const [textAreaValue, setTeaxtArea] = useState('');

    const [schemeTitle, setSchemeTitle] = useState("Pavan's Software Traniee Scheme");
    const [isLoaded, setIsLoaded] = useState(false);
    const [schemeFund, setSchemeFund] = useState('')

    const handler =(e)=>{
                e.preventDefault();
                chatHttpServer.updateScheme({
                    id:props.location.state.schemeId,
                    schemeFund:schemeFund,
                    description:textAreaValue,
                    govt:"stateOrcentral"
                }).then(res=>{
                    console.log(res)
                    if (res.success) {
                        alert("Modification Done successfully :)")
                        window.location.assign('/stateDashboard')
                      }
                      else {
                        alert("Something is Fishy Check the Code Amigo")
                      }
                }).catch(err=>{
                    console.log(err)
                });
    }
    useEffect(() => {
        console.log("id   ::: "+props.location.state.schemeId)
        // chatHttpServer.getUserInfo()
        // .then(res=>{
        //    console.log(res)
        //    setmailId(res.email);
        //    setProfileName(res.firstName)
        //    setAcademicDetails({
        //        section:res.section,
        //        year : res.year,
        //        branch:res.branch
        //     });
        //     if((res.skills).length>0)
        //     setUserSkills(res.skills.split(","))
        // })

        // chatHttpServer.getQuestionsByUser()
        // .then(res=>{
        //    setQuestions(res.result)
        // })

        // chatHttpServer.getCategories()
        // .then(res=>{
        //     console.log(res)
        //    let skillArray= res.map((obj,index)=>(
        //          {
        //             key:index,
        //         value:obj.catName,
        //         text:obj.catName
        //         }
        //    ))
        //    setSkills(skillArray)
        // }
        // )



        chatHttpServer.userSessionCheck()
            .then(res => {
                if (!res.isAuthenticated)
                    window.location.assign('/')
            })
        setSchemeTitle(props.location.state.title)
        setTeaxtArea(props.location.state.description)
        setIsLoaded(true)
        setSchemeFund(props.location.state.fundsDisbursed)
        return () => {
            alert("unmount")
            console.log('will unmount');
        //  setIsLoaded(false);

        }


    }, []);



    return (
        <>
            <Row className=" mx-auto pt-4">
                {/* profile Card */}

                {/* ADD STATE */}





                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className=" mx-auto  border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                    <Button

                        className="mx-auto p-2 btn-md"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', fontSize: '30px', width: 'auto' }} >
                        {/* Badge */}

                       EDIT SCHEME
                   </Button>
                    <Card.Body>
                        {/* //States Card */}
                        {/* <StateUnionComponent details={{ skills: skills, userSkills: userSkills, type: 'States' }}></StateUnionComponent> */}

                        {/* UNION TERRITORY CARD */}

                        <Card className="mt-4 p-1 shadow-lg  " style={{ 'borderRadius': '25px' }} >

                            <Card.Body >
                                <Card.Title className="text-left p-2"  style={{backgroundColor:'rgb(240, 255, 255)',borderRadius:'15px',fontSize:'20px'}} >
                                    {schemeTitle.toUpperCase()}
                                </Card.Title>
                                <TextareaAutosize className=" mt-4 p-3 border border-top-0 w-100"

                                    onChange={(e) => { setTeaxtArea(e.target.value) }}
                                    value={textAreaValue}
                                    style={{
                                        maxHeight: 500, fontSize: '20px',
                                        borderBottomRightRadius: '30px',
                                        borderBottomLeftRadius: '30px'
                                    }}
                                    required
                                />
                                {/* <RawE></RawE> */}
                                <Form className="ml-3 mt-2 ">
                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                        <Form.Label style={{ fontSize: '18px' }} column sm="3">
                                            Funds Required :
    </Form.Label>
                                        <Col sm="18">
                                            <Form.Control type="number" value={schemeFund} 
                                            onChange={(e)=>{setSchemeFund(e.target.value)}}
                                            required ={schemeFund>5000?true:false}
                                            />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                            <Card.Footer>

                                <Alert variant='warning'>
                                    Processing!
                                    </Alert>
                            </Card.Footer>
                        </Card>

                    
                    </Card.Body>
                    <Button className="mx-auto mb-4 btn-md"
variant="outline-dark"
style={{ 'borderRadius': '20px', width: 'auto' }}
onClick={(e)=>handler(e)}
>
{/* Badge */}

Submit
</Button>
                </Card>
          

            </Row>
        </>
    )
}

export default withRouter(EditScheme)