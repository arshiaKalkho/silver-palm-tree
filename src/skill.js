import React, { Component } from 'react';

import {Card} from "react-bootstrap";



export class skill extends Component{ 

    constructor(props){
    super(props);
    this.data = props.skill;
    this.myid = props.skill.id;
    this.sum = props.sum;
    
    
    }
    
    
    
    
    render(){
       
        
        
        return(
        <div className="each-Widget" onClick={()=>this.props.handler(this.myid)} >
                
                <Card id={this.data.id} key={this.data.id} className="cards-skill">
                    <Card.Title className="cards-skill-title">
                    <h2>{this.data.id}</h2>
                        
                    </Card.Title>
                    
                    <Card.Body className="cards-skill-body" >
                        {this.data.name}
                        <br/>
                        { this.sum}
                    </Card.Body>
                </Card>
        
        </div>
            )
    }
}


export default skill;