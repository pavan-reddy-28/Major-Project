
import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import SendMessage from './SendMessage'
import MessageDisplay from './MessageDisplay'
import chatHttpServer from '../../utils/chatHttpServer'
import { withRouter } from 'react-router'

 class MessageCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoaded:false,
             messageData:[]
        }
    }

    
componentDidMount(){
    //make server call and get messages fom server 
    chatHttpServer.getMessages({schemeId:this.props.details.schemeId}).then(resp=>{
      
        console.log(resp)
        console.log(this.props.location.state)
        // var rec=[]
        for(let i=0;i<resp.length;i++){
            this.state.messageData.push({
                    from:resp[i].from,
                    message:resp[i].messageData 
                })
        }
        this.setState((state,props)=>({
            messageData:state.messageData
        }))
        console.log(this.state.messageData)
        // setmessage(resp)
        this.setState({isLoaded:true})
       })

}
componentDidUpdate(){
console.log("updated")
}


addMessagehandler=(e)=>{
    console.log(e)
    this.state.messageData.push({from:this.props.details.from,message:e})
    var rec={from:this.props.details.from,message:e}
    // this.state.messageData.push(rec)
    this.setState((state,props)=>({
        messageData:state.messageData
    }))
    chatHttpServer.messagesInsert({ 
        messageData:e,
        schemeId : this.props.details.schemeId,
        from : this.props.details.from}).then(e=>{
            console.log(e)
        })
            // this.setState({
            //     messageData:messageData
            //               })
            //add message to the server 

}

    render() {
        return (
            <Card className=" " 
    style={{   
        width: '100%', 
        height: 'auto', 
        margin: '15px',  
        borderRadius: '20px' 
        }}>         
    <Card.Body >
        {
            // console.log(this.state.messageData)
            this.state.isLoaded?
            <>{
               
           this.state.messageData.map((data ,index)=>(
               <div  key={index}>
               <MessageDisplay key={index} sender={data.from} message={data.message}/>
               </div>
           ))}</>
                :
                ''
        }
    </Card.Body>
    <Card.Footer>
        <SendMessage approved={this.props.details.approved}  handler={(e)=>this.addMessagehandler(e)} />
    </Card.Footer>
</Card>


        )
    }
}
export default withRouter(MessageCard)