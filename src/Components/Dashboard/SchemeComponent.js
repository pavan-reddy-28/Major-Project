import React, { useState, useEffect, Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Row, Container, Card, Button, ListGroup, Badge,ButtonToolbar } from 'react-bootstrap'

class SchemeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tempSkill: [],
            schemeTitle:this.props.details.Title,
            unionTerritory :[
                "West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"
            ]
        }
    }

    handleDropdown = (e, { value }) => {
        this.setState({ tempSkill: value })
    }

    addSkillHandler = () => {
        let temp = this.state.tempSkill
        //console.log(temp, typeof temp, states, typeof states)
        temp.push(...this.state.states)
        let set = new Set(temp)
        temp = Array.from(set)
        console.log(temp)
        this.setState({ states: temp })
        this.setState({ tempSkill: [] })
    }

    // componentWillUnmount() {
    //     console.log("127 unmount")
    //     console.log(this.state.states)
    //     chatHttpServer.updateSkills({ skills: this.state.states })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Card className="mt-4 p-1 shadow-lg  " style={{'borderRadius': '25px'}} >
                <Card.Title className="mx-auto">
                    <Button
                        className="  btn-md "
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

        )
    }
}

export default SchemeComponent
