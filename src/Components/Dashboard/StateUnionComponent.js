import React, { useState, useEffect, Component ,PureComponent} from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Row, Container, Card, Button, ListGroup, Badge,ButtonToolbar } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { Redirect, Link } from 'react-router-dom'
class StateUnionComponent extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            detail : props.details,
            
        }
    }

   
    

   
    render() {
        console.log(this.props.details)
        return (
            <Card className="mt-4 p-1 shadow-lg  " style={{'borderRadius': '25px'}} >
                <Card.Title className="mx-auto">
                    <Button
                        className=" mt-2 btn-md "
                        variant="outline-dark"
                        style={{
                            'borderBottomLeftRadius': '30px', 'borderBottomRightRadius': '30px',
                            borderWidth: '4px',

                            fontSize: "30px", fontWeight: 'bolder'
                        }} >
                        {this.props.type}
                        </Button>
                </Card.Title>
                <Card.Body>

                    <ButtonToolbar className="mx-auto   ">
                        {
                            this.state.detail.map(
                                (obj, index) => (
                                    <Link
                                    key={index}
                                    to={{
                                        pathname:'/CentralStateSchemeDetails',
                                        state:{
                                           Id:obj.id,
                                           name :obj.name
                                        }
                                    }}
                                    style={{ color: '#000', textDecoration: 'none' }}
                                    >
                                    <Button
                                        key={index}
                                        className="m-3 p-2 btn-md"
                                        variant="outline-dark"
                                        style={{ 'borderRadius': '20px' ,fontSize:'20px',width:'180px' }} >
                                            {/* Badge */}
                                            {
                                                obj.value!==0?
                                                <Badge className="m-1" pill variant="danger">{obj.value}</Badge>
                                                :<></>
                                            }
                                            
                                        {obj.name}
                                    </Button>
                                    </Link>
                                )
                            )
                        }</ButtonToolbar>
                    <Row className="mx-auto">
                    
                    </Row>

                </Card.Body>
            </Card>

        )
    }
}

export default withRouter(StateUnionComponent)
