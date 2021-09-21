import React from 'react';
import skills from "./data/skills.json";
import {Card} from "react-bootstrap";




export default function skill(){
    const Skilllist = skills.map((data)=>{
        return(
            <Card key={data.id} className="cards">
                <Card.Title className="cards-title">
                <h2>{data.id}</h2>
                    
                </Card.Title>
                
                <Card.Body className="cards-body">
                     {data.name}
                     
                </Card.Body>
            </Card>
        );
    });
    return(<div>{Skilllist}</div>);
}