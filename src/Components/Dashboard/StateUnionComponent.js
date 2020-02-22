import React, { useState, useEffect, Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Row, Container, Card, Button, ListGroup, Badge,ButtonToolbar } from 'react-bootstrap'

class StateUnionComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tempSkill: [],
            states: ["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand"
        ],
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
                        className=" mt-2 btn-md "
                        variant="outline-dark"
                        style={{
                            'borderBottomLeftRadius': '30px', 'borderBottomRightRadius': '30px',
                            borderWidth: '4px',

                            fontSize: "30px", fontWeight: 'bolder'
                        }} >
                        {this.props.details.type}
                        </Button>
                </Card.Title>
                <Card.Body>

                    <ButtonToolbar className="mx-auto   ">
                        {
                            this.state.states.map(
                                (skill, index) => (
                                    <Button
                                        key={index}
                                        className="m-3 p-2 btn-md"
                                        variant="outline-dark"
                                        style={{ 'borderRadius': '20px' ,fontSize:'20px',width:'180px' }} >
                                            {/* Badge */}
                                            <Badge className="m-1" pill variant="danger">9</Badge>
                                        {skill}
                                    </Button>
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

export default StateUnionComponent
