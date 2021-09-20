import React from 'react';
import skills from "./data/skills.json";
import {Card} from "react-bootstrap";




export default function skill(){
    const Skilllist = skills.map((data)=>{
        return(
            <Card key={data.id} className="cards">
                <Card.Title className="cards-title">
                    {data.id}
                </Card.Title>
                
                <Card.Body className="cards-body">
                     {data.name}
                </Card.Body>
            </Card>
        );
    });
    return(<div>{Skilllist}</div>);
}