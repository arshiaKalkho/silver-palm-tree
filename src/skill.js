import React, { Component } from 'react';

import {Card} from "react-bootstrap";



export class skill extends Component{ 

    constructor(props){
    super(props);
    this.date = props.skill;
    
    
    }
   
   
    
    render(){
        
        
        
        return(
        <div className="each-Widget">
                <Card key={this.data.id} className="cards-skill" >
                    <Card.Title className="cards-skill-title">
                    <h2>{this.data.id}</h2>
                        
                    </Card.Title>
                    
                    <Card.Body className="cards-skill-body">
                         {this.data.name}
                         
                    </Card.Body>
                </Card>
        
        </div>
            )
    }
}


export default skill;