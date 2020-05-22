import React, { useState, useEffect, Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Row, Container, Card, Button, ListGroup, Badge,ButtonToolbar } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
class SchemeComponent extends Component {

    constructor(props) {
        super(props)
console.log("id :: "+this.props.details.id)
console.log("name :: "+this.props.name)
        this.state = {
            schemeTitle:this.props.details.name,
           
        }
    }

   
  

    componentWillUnmount() {
        
    }

    render() {
        return (
            <Link
            to={{
                pathname:'/schemeDetails',
                state:{
                    schemeId :this.props.details.id,
                    title : this.props.details.name,
                    description : this.props.details.description,
                    fundsDisbursed: this.props.details.fundsDisbursed,
                    approved: this.props.details.approved,
                    from : this.props.from,
                    stateName:this.props.name
                }
            }}
            style={{ color: '#000', textDecoration: 'none' }}
            >
            <Card className="mt-4 p-1 shadow-lg  " style={{'borderRadius': '25px'}} 
            
            >
                <Card.Title className="mx-auto">
                    
                    <Button
                        className="text-left  btn-md "
                        variant="light"
                        style={{
                            'borderRadius': '30px', 
                            borderWidth: '4px',

                            fontSize: "30px", fontWeight: 'bolder'
                        }} >
                        {this.state.schemeTitle.toLocaleUpperCase()}
                        </Button>
                </Card.Title>
                <Card.Body>

                   
                    <Row className="mx-auto">
                    
                    </Row>

                </Card.Body>
            </Card>
            </Link>
        )
    }
}

export default withRouter(SchemeComponent)
