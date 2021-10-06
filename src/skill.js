import React, { Component } from 'react';

import {Card} from "react-bootstrap";



export class skill extends Component{ 

    constructor(props){
    super(props);
    this.data = props.skill;
    this.myid = props.skill.id;
    this.sum = props.skill.summary;
    this.imgsrc = props.skill.img;
    
    
    }
    
    
    
    
    render(){
       
        
        
        return(
        <div className="each-Widget" onClick={()=>this.props.handler(this.myid)} >
                
            <Card  key={this.data.id} id={this.myid}  className="cards-skill">
                <Card.Title className="cards-skill-title">
                    {this.data.name}
                    
                </Card.Title>
                
                <Card.Body className="cards-skill-body" >
                
                {()=>{if(this.props.isxl===true)return this.sum}}
                    
                </Card.Body>
            </Card>
        
        </div>
            )
    }
}


export default skill;