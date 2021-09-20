import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
export class widget extends Component {
    
    
    
    render() {
        return (
            <div className="widget row" >
                <div className="col-sm-1"></div>
                
                    <div className="col-md-4 skills-div">
                        <h3>Skills</h3>
                        <Skill/>
                    </div>
                    
                    <div className="col-md-4 experiences-div">
                        <h3>Experiences</h3>
                        <Experience/>
                    </div>
                    
                <div className="col-sm-1"></div>
                
            </div>
        )
    }
}

export default widget;
