import React from 'react'
import {Button,ButtonGroup} from 'react-bootstrap'
function MessageDisplay(props) {
    return (
        <>
<ButtonGroup className="mt-2 mb-2" aria-label="Basic example" style={{width:'100%,',marginTop:'5px',marginBottom:'5px'}}>
  <Button className="mr-2 border-0" style={{ width:'100px', color:'black', backgroundColor:"Transparent"}} >
        [{props.sender}]
  </Button>
  <Button className=" border-top-0 border-bottom-0 border-right-0 text-left" style={{width:'800px',color:'black',backgroundColor:"Transparent"}} >
      {props.message}
  </Button>
 
</ButtonGroup>



        </>
    )
}

export default MessageDisplay
