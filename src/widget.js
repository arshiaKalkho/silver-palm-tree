import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
export class widget extends Component {
    
    
    
    render() {
        return (
            <div className="widget container" >
                    
                    <div className="col-sm-2"></div>
                    <h3>Skills</h3>
                    <div class="skills-div row" data-aos="fade-left "data-aos-delay="100">
                        
                        <div className="widget-half-div col-sm-6">
                            
                                <Skill id = {1}/>
                            
                        </div>
                        <div className="widget-half-div col-sm-6">
                            
                                <Skill id = {0}/>
                            
                        </div>
                    </div>
                        
                        
                        
                        <h3>Experiences</h3>
                        <div className="experiences-div" data-aos="fade-right "data-aos-delay="100">
                            
                            <Experience/>
                        </div>
                        
                        
                    
                
            </div>
        )
    }
}

export default widget;
