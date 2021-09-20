import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
export class widget extends Component {
    
    
    
    render() {
        return (
            <div className="widget row" >
                <div className="col-md">
                    <Skill/>
                </div>
                <div className="col-md">
                    <Experience/>
                </div>
                
            </div>
        )
    }
}

export default widget;
