import React, { Component } from 'react';
import Widget from './widget';
import Slides from './Slides';








export default class Body extends Component{
    
    render(){

        return(
            <div className="body">
                <div>
                    <Slides/>
                </div>
                <div>
                    <Widget/>
                </div>
            </div>
        );
    }

    

}