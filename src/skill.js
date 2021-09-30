import React, { Component } from 'react';
import skills from "./data/skills.json";
import {Card} from "react-bootstrap";
import widget from './widget';



export class skill extends Component{ 
//i wanted two rows and it wouldn't work the css column 
//way with safari so  manually it is
    constructor(props){
    super(props);
    this.row = props.row;
    this.id = props.id;
    this.onclicked = props.clicked;
    
    }
   
    
    
    render(){
        
        
        const Skilllist = skills.map((data)=>{
            
            if(data.id%2===this.row || data.id===this.id){
            return(
                
                <Card key={data.id} className="cards-skill" onClick={() => this.onclicked() } style={{ cursor: "pointer" }}>
                    <Card.Title className="cards-skill-title">
                    <h2>{data.id}</h2>
                        
                    </Card.Title>
                    
                    <Card.Body className="cards-skill-body">
                         {data.name}
                         
                    </Card.Body>
                </Card>
                
            );
        }else{
                return "";
            }
        })
        return(
       
            <div className="each-Widget">{Skilllist}</div>
            )
    }
}


export default skill;