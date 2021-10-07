import React, { Component } from 'react';

import {Card} from "react-bootstrap";



export class skill extends Component{ 

    constructor(props){
    super(props);
    this.data = props.skill;
    this.myid = props.skill.id;
    this.sum = props.skill.summary;
    this.imgsrc = props.skill.img;
    this.className = "cards-skill";
    
    }
    
    
    
    
    render(){
       
        
        if(this.props.isxl){
           this.className += " large-skill-logo-card"//a way to specialize the large logo without its id being changed
        }
        return(
        <div className="each-Widget" onClick={()=>this.props.handler(this.myid)} >
                
            <Card  key={this.data.id} id= {this.myid}  className= {this.className} >
                <Card.Title className="cards-skill-title">
                    
                </Card.Title>
                

               
            
            
                <Card.Body className="cards-skill-body" >
                
                    
                
                </Card.Body>
            

        
            </Card>
        </div>
        )
    }
}


export default skill;