import React from 'react';
import skills from "./data/skills.json";
import {Card} from "react-bootstrap";




export default function skill(){
    const Skilllist = skills.map((data)=>{
        return(
            <Card key={data.id}>
                <Card.Body>
                    {data.name}
                </Card.Body>
            </Card>
        );
    });
    return(<div>{Skilllist}</div>);
}