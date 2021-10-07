import React from 'react'

function skillSummery(props) {
   
    return (
        <div>
            <div className="skillSummery-header">{props.skill.name}</div>
            
            {props.skill.summary}
        
        </div>
    )
}

export default skillSummery
