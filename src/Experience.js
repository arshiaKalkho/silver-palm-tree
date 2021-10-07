import React from "react";
import { Card, Accordion,Collapse } from "react-bootstrap";
import experiences from "./data/experiences.json";



function Experience() {
    

    
        
    const exp = experiences.map( (data)=>{       
            return(
            
                    
                    
                    
                    
                <Card key={data.id} className="cards-experience"> 
                
                    <Card.Title className="cards-experience-title">
                        {data.title}
                    </Card.Title>
                    
                    <Card.Header>
                        {data.startDate + " "}
                        - 
                        {" "+data.endDate}
                        
                    </Card.Header>
                    
                    <Card.Body>
                        {data.explanation}
                    </Card.Body>
                
                
                </Card>
                
                    
                    
                    
                       
                        
                        
                    
                
            )
    });
            return(<div className="each-Widget">{exp}</div>);


}

export default Experience;