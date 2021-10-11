import React, { Component } from 'react'
import Skill from './skill';
import Experience from './Experience';
import skills from "./data/skills.json";
import SkillSummery from './skillSummery';
import experiences from "./data/experiences.json";




export class widget extends Component {
    

    constructor(props){
        super();
        this.hadnleClick = this.hadnleClick.bind(this);
        this.state = {id:1};
    }
    hadnleClick(ID) {
        // console.log("state updated to :", ID)
        this.setState({id : ID});

    };
    
    render() {

       


        
        
        



        return (
            <div className="widget" >
                    
            <h3 className="h3-headers">Skills</h3>
        
                <div className="main-row" >
                    <div className="skills-div row">
                        

                    
                    
                        <div className="widget-half-div col-6" data-aos="fade-left" data-aos-duration="1000">
        
                                            {skills.map((data)=>{
                                                
                                                if(data.id%2===1){
                                                    
                                                    return(
                                                        <Skill skill = {data} handler={this.hadnleClick}/>)
                                            
                                        
                                    }else{
                                        return "";
                                        }
                                    })}
                                

                        </div>
                        

                        
                        <div className="widget-half-div col-5" data-aos="fade-right" data-aos-duration="1000">
                            
                                { 

                                    skills.map((data)=>{
                                        
                                        if(data.id%2 === 0){
                                            return(<Skill skill = {data} handler={this.hadnleClick}/>)
                                    }else{
                                            return "";
                                        }
                                    })
                                    }
                            
                        </div>

                    
                    </div>


                    
                    <div className="large-skill-summery-flex">
                        <div className="widget-large-skill" data-aos="flip-left">
                            
                                

                                {
                                skills.map((data)=>{
                                    if(data.id === this.state.id){
                                        return ( <Skill isxl={true} handler={this.hadnleClick}skill = {data} />)}
                                    }
                                )}
                            
                        </div>
                            
                        <div className="skill-summery " data-aos="flip-right">
                                    {
                                    skills.map((data)=>{
                                        if(data.id === this.state.id){
                                            //console.log("should show",data.summery);
                                            return ( <SkillSummery skill = {data}/>)}
                                        }
                                    )}
                                        

                        </div>
                    </div>
                </div>

            
                
                

                
                <h3 className="h3-headers">Experiences</h3>
        
            <div >
        
            
                
                <div className="experiences-div"  data-aos="flip-down">
                    <div className="each-Widget">
                            {experiences.map( (data)=>{       
  
                                return(<Experience experience = {data} />)

                            })
                        }
                    </div>
                </div>
            </div>
    
                    
                    
                    
                        
            </div>
        )
    }
}

export default widget;
