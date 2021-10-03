import React, { Component } from 'react';
import Widget from './widget';
import Slides from './Slides';
import Summery from './Summery';
import WebsiteInfo from './websiteInfo';








export default class Body extends Component{
    
    render(){
        // alert("website is't completed yet and is begin worked on");
        return(
            <div className="body">
                
                <div className="slides">
                   
                     <Slides/>
                </div>
                <h3 className="h3-headers"> About me</h3>
                <div className="summery" data-aos="fade-right">
                        <Summery/> 
                </div>
                
                <div className="websiteinfo-div">
                <h3 className="h3-headers"> About this website</h3>
                    <WebsiteInfo/>
                </div>
                <div className="body-website-info">
                   
                </div>
                <div className=" body-row">
        
                <div className="body-footer-spacer"> </div>
                
                    
                    <div >
                        <Widget/>
                    </div>
                    <div className="body-footer-spacer"> </div>

                    
        
                </div>

            </div>

        );
    }

    

}