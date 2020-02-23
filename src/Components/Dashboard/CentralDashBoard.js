import React, { useState ,useEffect} from 'react'
import { Row, Container, Card, Button, ListGroup,ButtonToolbar } from 'react-bootstrap'
import './style.css'

// import chatHttpServer from '../../utils/chatHttpServer'
import { Redirect, Link } from 'react-router-dom'

import StateUnionComponent from './StateUnionComponent'
const CentralDashBoard=()=> {
    const[mailId,setmailId]= useState("");
    const[profileName,setProfileName] = useState("");
    const[acadamicDeatils,setAcademicDetails]=useState("");
    const[questions,setQuestions]=useState([])
    const[skills,setSkills] = useState([])
    const[userSkills,setUserSkills] = useState([])
    const[tempSkills,setTempSkills] = useState("")
    useEffect(()=>{
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


},[]);





    return (
        <>
            <Row className="pt-4">
                {/* profile Card */}
                
                {/* STATES AND  UNINON TERRITORY CARD*/}
                <Card className="  p-3 border-0" style={{ width: '55rem', height: 'auto', marginLeft: '40px',backgroundColor:'transparent','borderRadius': '20px' }}>
                <Button
                       
                       className="mx-auto p-1 btn-md"
                       variant="outline-dark"
                       style={{ 'borderRadius': '20px' ,fontSize:'30px',width:'240px' }} >
                           {/* Badge */}
                           
                       DASHBOARD
                   </Button>
                    <Card.Body>
                        {/* //States Card */}
                        <StateUnionComponent details={{skills:skills,userSkills:userSkills,type:'States'}}></StateUnionComponent>
                       
                       {/* UNION TERRITORY CARD */}
                        <StateUnionComponent  details={{skills:skills,userSkills:userSkills,type:"Union Territory"}}></StateUnionComponent>
                                   
           
                    </Card.Body>
                </Card>

                {/* ADD STATE */}
                <Card 
                className="pt-5 border-0 ml-2" 
                style={{ width: '15rem',backgroundColor:'transparent' }}>
                    
                    <Card.Body >
                        <Card.Title>
                        <Button
                       
                       className="m-3 p-1 btn-md"
                       variant="outline-dark"
                       style={{ 'borderRadius': '20px' ,fontSize:'30px',width:'240px',position:'fixed',borderWidth:'5px' }} >
                         
                           
                       ADD STATE
                   </Button>
                        
                        </Card.Title>
                      
                            

                        
                    </Card.Body>
                </Card>
                
            </Row>
        </>
    )
}

export default CentralDashBoard