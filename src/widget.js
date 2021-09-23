import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
export class widget extends Component {
    
    
    
    render() {
        return (
            <div className="widget container" >
                    
                    <div className="col-sm-2"></div>
                    <h3>Skills</h3>
                    <div class="skills-div row">
                        
                        <div className="widget-half-div col-sm-6">
                            
                                <Skill id = {1}/>
                            
                        </div>
                        <div className="widget-half-div col-sm-6">
                            
                                <Skill id = {0}/>
                            
                        </div>
                    </div>
                        
                        
                        
                        <h3>Experiences</h3>
                        <div className="experiences-div">
                            
                            <Experience/>
                        </div>
                        
                        
                    
                
            </div>
        )
    }
}

export default widget;
