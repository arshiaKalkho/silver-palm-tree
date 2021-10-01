import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
import skills from "./data/skills.json";





export class widget extends Component {
    

    constructor(props){
        super();
        this.clicked = this.clicked.bind(this);
        this.state = {id:1};
    }
    clicked(ID) {
        this.setState({id : ID});
    };
    
    render() {



        const row1 = skills.map((data)=>{
            
            if(data.id){
            return(
                <Skill skill = {data}/>
                
            );
        }else{
                return "";
            }
        })



        const row2 = skills.map((data)=>{
            
            if(data.id%2===this.row || data.id===this.id){
            return(
                <Skill skill = {data}/>
                
            );
        }else{
                return "";
            }
        })



        return (
            <div className="widget" >
                    
                   
                        <h3>Skills</h3>
                    
                        <div className="main row" >
                            <div className="skills-div row">
                                
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                <div className="widget-half-div col-sm-6">
                                    
                                {row1}
                                        
                                    
                                </div>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <div className="widget-half-div col-sm-6">
                                    
                                {row2}
                                    
                                </div>
                            
                            
                            
                            
                            
                            
                            </div>




                            
                            
                            
                            
                            
                            
                            
                            
                            <div className="widget-large-skill col-sm-6">
                                
                                    <Skill id = {this.state.id} clicked = {this.clicked}/>
                                
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
