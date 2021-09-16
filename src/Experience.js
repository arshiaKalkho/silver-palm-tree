import React from "react";




function Experience(props) {
    const {title, startDate, endDate, explanation} = props;

    return(
        <article className="experience">
            
            <h1>{title}</h1>
            <h4>{startDate}</h4>
            <h4>{endDate}</h4>
            <p>{explanation}</p>

        </article>
    );


}

export default Experience;