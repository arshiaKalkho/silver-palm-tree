import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
export class widget extends Component {
    
    
    
    render() {
        return (
            <div className="widget containter" >
                    
                    
                    
                        
                       
                    
                   
                    <div class="row">
                        <div className="skills-div col-sm-8">
                        <h3>Skills</h3>
                            <div className="widget-half-div ">
                                
                                    <Skill id = {1}/>
                                
                            </div>
                            <div className="widget-half-div ">
                                
                                    <Skill id = {0}/>
                                
                            </div>
                        </div>
                        
                    
                        <div className="col-sm-4">
                    
                        <h3>Experiences</h3>
                            
                            <div className="experiences-div">
                                
                                <Experience/>
                            </div>
                        </div>
                
                    
                    
                    
                    </div>
                        
            </div>
        )
    }
}

export default widget;
