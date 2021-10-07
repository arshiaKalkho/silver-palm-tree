import React from 'react'

function skillSummery(props) {
   
    return (
        <div>
            <div className="skillSummery-header">{props.skill.name}</div>
            <div className="skillSummery-body">
                {props.skill.summary}
            </div>
        </div>
    )
}

export default skillSummery
