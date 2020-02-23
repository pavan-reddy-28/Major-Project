import React, { useState, useEffect } from 'react'
import { Row, Container, Card,Form, Button, ListGroup, ButtonToolbar } from 'react-bootstrap'
import './style.css'

// import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';

import SchemeComponent from './SchemeComponent'
const AddScheme = () => {
    const [textAreaValue, setTeaxtArea] = useState("What is Lorem Ipsum\?    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    
    useEffect(() => {
        console.log("in")
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

        return () => {
            alert("unmount")
            console.log('will unmount');
        }


    }, []);





    return (
        <>
            <Row className=" mx-auto pt-4">
                {/* profile Card */}

                {/* ADD STATE */}
                {/* <Card
                    className="pt-5 border-0 ml-2"
                    style={{ width: '15rem', backgroundColor: 'transparent' }}>

                    <Card.Body >
                        <Card.Title className="mt-4" >
                            <Button

                                className="m-3  mt-4 pt-3 p-1 btn-md"
                                variant="outline-dark"
                                style={{ 'borderRadius': '20px', fontSize: '30px', width: '240px', position: 'fixed', borderWidth: '5px', }} >
                                ADD SCHEME
                   </Button>

                        </Card.Title>
                    </Card.Body>
                </Card> */}


                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className=" mx-auto  border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px', backgroundColor: 'transparent', 'borderRadius': '20px' }}>
                    <Button

                        className="mx-auto p-1 btn-md"
                        variant="outline-dark"
                        style={{ 'borderRadius': '20px', fontSize: '30px', width: '240px' }} >
                        {/* Badge */}

                        State Schemes
                   </Button>
                    <Card.Body>
                        {/* //States Card */}
                        {/* <StateUnionComponent details={{ skills: skills, userSkills: userSkills, type: 'States' }}></StateUnionComponent> */}

                        {/* UNION TERRITORY CARD */}

                        <Card className="mt-4 p-1 shadow-lg  " style={{'borderRadius': '25px'}} >
                        <TextareaAutosize className=" mt-4 p-3 border border-top-0"
              value={textAreaValue}
              style={{ maxHeight: 200 ,fontSize:'20px',
            borderBottomRightRadius:'30px',
            borderBottomLeftRadius:'30px'}} 
                        disabled/>
                        
                <Card.Body>

                   

                </Card.Body>
            </Card>


                    </Card.Body>
                </Card>


            </Row>
        </>
    )
}

export default AddScheme