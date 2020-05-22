

import React, { PureComponent } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import {Button} from 'react-bootstrap';


 class SendMessage extends PureComponent {



    
constructor(props) {
    super(props)

    this.state = {
message:"",
approved:props.approved
    }
}

    render() {
        return (<>
        <div className="w-100">
            <this.TextBox this={this}/>
            </div>
            </>
        );
    }

    TextBox =(props)=>{
        return (
<>
            <TextareaAutosize 
            className=" mt-2 p-3 border border-top-0 "
            value={props.this.state.message}
            onChange={(e)=>props.this.setState({message:e.target.value})}
            style={{
                    maxHeight: 500, fontSize: '20px',
                    backgroundColor:'rgba(207, 216, 220, 0.719)',
                    width:'80%',
                    borderRadius: '5px',
                    marginRight:'10px'
                    }}
            disabled={props.this.state.approved==1?true:false}
        />
       
        <props.this.SendButton this={props.this}/>
     
</>

              
    );
    }

    //send message to the parent component and then reset textArea value
    messageSendHandler = (t)=>{
        console.log(t.state.message)
        t.props.handler(t.state.message);
        t.setState({message:''})
    }
    SendButton = (props) =>{
        return (
            <Button 
            className="mx-auto ml-2 " 
            variant="secondary"
            style={{fontSize:'20px'}}
                onClick={()=>props.this.messageSendHandler(props.this)}
        >
        <i className="fas fa-paper-plane" style={{color:'black'}} />
        </Button> 
        );
    }
}



export default SendMessage
