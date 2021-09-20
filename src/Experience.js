import React from "react";
import { Card } from "react-bootstrap";
import experiences from "./data/experiences.json";



function Experience() {
    

    
        
    const exp = experiences.map( (data)=>{       
            return(
            <Card key={data.id} className="cards"> 
                <Card.Title className="cards-title">
                    {data.title}
                </Card.Title>
               
                
                <Card.Body className="cards-body">
                    {data.startDate}
                    {data.endDate}
                    {data.explanation}
                </Card.Body>
            </Card>)
    });
            return(<div>{exp}</div>);


}

export default Experience;