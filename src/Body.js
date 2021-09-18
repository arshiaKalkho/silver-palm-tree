import React, { Component } from 'react';
import Skill from './skill';
import Experience from './Experience';
import Slides from './Slides';




const experiences = [
    
{
    title:"Capstone project - Seneca College",
    startDate:"1/1/2020",
    endDate:"1/3/2020",
    explanation:"works with voltaire power, on a full stack application"

},{
    title:"Peer Tutor - Senecal Collge",
    startDate:"1/1/2020",
    endDate:"1/3/2020",
    explanation:"works with students in a collaborative environment, groups based and one on one sessions to give them a boost in react and angular"

},{
    title:"running app",
    startDate:"1/1/2020",
    endDate:"1/3/2020",
    explanation:"designed a ibm I based application to calculate accurate running distances by coordinates"

},{
    title:"C",
    startDate:"1/1/2020",
    endDate:"1/3/2020",
    explanation:"works with voltaire power, on a full stack application"

},
];





export default class Body extends Component{
    
    render(){

        return(
            <div className="body">
                <Slides/>   
                <Experience props = {experiences}></Experience>
            </div>
        );
    }

    

}