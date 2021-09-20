import React from "react";
import { Card } from "react-bootstrap";
import experiences from "./data/experiences.json";



function Experience() {
    

    
        
    const exp = experiences.map( (data)=>{       
            return(
            <Card key={data.id}>
                <Card.Title>
                    {data.title}
                </Card.Title>
               
                
                <Card.Body>
                    {data.startDate}
                    {data.endDate}
                    {data.explanation}
                </Card.Body>
            </Card>)
    });
            return(<div>{exp}</div>);


}

export default Experience;