import React, { Component } from 'react';
import Widget from './widget';
import Slides from './Slides';
import Summery from './Summery';







export default class Body extends Component{
    
    render(){

        return(
            <div className="body">
                
                
                <div className="slides">
                    <Slides/>
                </div>
                
                <div className="row body-row">
                    
                    <div className="container">
                        
                        <div className="summery" data-aos="fade-right">
                            {/* <Summery/> */}
                        </div>
                        <div data-aos="fade-left "data-aos-delay="500">
                            <Widget/>
                        </div>
                        <div className="body-footer-spacer"> </div>

                    </div>
        
                </div>

            </div>

        );
    }

    

}