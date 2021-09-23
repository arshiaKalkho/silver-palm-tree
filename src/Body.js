import React, { Component } from 'react';
import Widget from './widget';
import Slides from './Slides';
import Summery from './Summery';







export default class Body extends Component{
    
    render(){

        return(
            <div className="body">
                
                
                <div>
                    <Slides/>
                </div>
                
                <div className="row">
                    
                    <div className="side-body-left col-sm-1" data-aos="fade-left" data-aos-delay="100"></div>
                    
                    <div className="col-md-10">
                        
                        <div className="summery"data-aos="fade-right" >
                            <Summery/>
                        </div>
                        <div data-aos="fade-left">
                            <Widget/>
                        </div>
                    </div>

                    <div className="side-body-right col-1"data-aos="fade-right" data-aos-delay="100"></div>
                </div>
            
            </div>

        );
    }

    

}