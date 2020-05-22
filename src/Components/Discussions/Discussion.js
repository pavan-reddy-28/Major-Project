import React, { Component, useState, useEffect } from 'react'
import { Row, Container, Card, Form, Alert, Col, Button,} from 'react-bootstrap'
import { withRouter } from 'react-router'
import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';

import MessageCard from './MessageCard'
function Discussion(props) {
  const [message, setmessage] = useState('')
  useEffect(() => {
  //  chatHttpServer.getMessages({schemeId:props.location.state.schemeId}).then(resp=>{
  //   console.log(resp)
  //   console.log(props.location.state)
  //   setmessage(resp)
  //  })
  console.log("name"+props.location.state.stateName)
    return () => {
      // cleanup
    }
  }, [])
  const handler=()=>{
    
  }
        return (
                <>
                  <Row className=" mx-auto pt-4">
                        {/* STATES AND  UNINON TERRITORY CARD*/}
                                <Card
                                    className="pt-5 border-0 m-4 "
                                    style={{ width: '100%',borderRadius:'15px', position:'sticky' }}>
                                    <Card.Title className="text-left" style={{ fontSize: '40px',padding:10 }} >
                                    {props.location.state.title}
                                    </Card.Title>
                                    <Card.Body>
                                    <Form className="ml-3 mt-2 "  as={Row}>
                                    <Form.Group >
                                      < Form.Label
                                        style={{fontSize: '18px'}} 
                                      >
                                        Funds Required 
                                        <span 
                                            style={{
                                                backgroundColor:"#E8ECEF",     padding:6,
                                                borderRadius:4,
                                                marginLeft:'8px',
                                            }}
                                        >
                                        {props.location.state.budget}
                                        </span>
                                      </Form.Label>
                                    </Form.Group>
                                </Form>
                               
                            </Card.Body>
                                </Card>
                               <MessageCard
                                details={
                                  {
                                    approved:   props.location.state.approved,
                                    schemeId:props.location.state.schemeId,
                                    from : props.location.state.stateName
                                  }
                                } 
                                />
        
                            </Row>
                        
                
            </>
        )
    

}
export default withRouter(Discussion)

