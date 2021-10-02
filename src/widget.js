import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
import skills from "./data/skills.json";





export class widget extends Component {
    

    constructor(props){
        super();
        this.hadnleClick = this.hadnleClick.bind(this);
        this.state = {id:1};
    }
    hadnleClick(ID) {
        // console.log("state updated to :", ID)
        this.setState({id : ID});

    };
    
    render() {

       


        
        
        



        return (
            <div className="widget" >
                    
            <h3>Skills</h3>
        
                <div className="main row" >
                    <div className="skills-div row">
                        

                    
                    
                        <div className="widget-half-div col-sm-6">
        
                                            {skills.map((data)=>{
                                                
                                                if(data.id%2===1){
                                                    
                                                    return(
                                                        <Skill skill = {data} handler={this.hadnleClick}/>)
                                            
                                        
                                    }else{
                                        return "";
                                        }
                                    })}
                                

                        </div>
                        

                        
                        <div className="widget-half-div col-sm-6">
                            
                                { 

                                    skills.map((data)=>{
                                        
                                        if(data.id%2 === 0){
                                            return(<Skill skill = {data} handler={this.hadnleClick}/>)
                                    }else{
                                            return "";
                                        }
                                    })
                                    }
                            
                        </div>

                    
                    </div>


                    
                    
                    <div className="widget-large-skill col-sm-6">
                        
                            

                            {
                            skills.map((data)=>{
                                if(data.id == this.state.id){
                                    // console.log("should show",data.id );
                                    return ( <Skill handler={this.hadnleClick}skill = {data} />)}
                                }
                            )}
                        
                    </div>
                    
                </div>

            
                
                

                
                <h3>Experiences</h3>
        
            <div >
        
            
                
                <div className="experiences-div">
                    <Experience/>
                </div>
            </div>
    
                    
                    
                    
                        
            </div>
        )
    }
}

export default widget;
