import React from 'react';
import skills from "./data/skills.json";
import {Card} from "react-bootstrap";




export default function skill(props){ 
//i wanted two rows and it wouldn't work the css column 
//way with safari so  manually it is
    const id = props.id;
    
    const Skilllist = skills.map((data)=>{
        
        if(data.id%2===id){
        return(
            
            <Card key={data.id} className="cards">
                <Card.Title className="cards-title">
                <h2>{data.id}</h2>
                    
                </Card.Title>
                
                <Card.Body className="cards-body">
                     {data.name}
                     
                </Card.Body>
            </Card>
        );}else{
            return "";
        }
    });
    return(<div>{Skilllist}</div>);
}