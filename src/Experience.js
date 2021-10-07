import React,{useState} from "react";

import { Collapse, Button, CardBody, Card,CardTitle,CardHeader } from 'reactstrap';




function Experience(props) {
    const data = props.experience;
    
    const[isOpen,toggleOpen] = useState(false);
    
    const toggle = ()=>{toggleOpen(!isOpen)};
        
           
            return(
            
                    
                    
                    
                    
                <Card key={data.id} className="cards-experience"> 
                
                    <CardTitle className="cards-experience-title">
                        {data.title}
                    </CardTitle>
                    
                    
                    <CardHeader className="cards-experience-header">
                        {data.startDate + " "}
                        - 
                        {" "+data.endDate}
                        
                    </CardHeader>
                    <button  onClick={toggle} className="experiences-expand-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg></button>
                        <Collapse isOpen={isOpen}>
                            <CardBody className="experiences-body">
                                {data.explanation}
                            </CardBody>
                         </Collapse>
                
                </Card>
               
            )
                    
                    
                       
                        
                        
                    
                
            
            


}

export default Experience;