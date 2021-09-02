import React from 'react';
import ReactDOM from 'react-dom';
import Skill from './skill';


function Main() {
  return (
  <section>
    
    <Skill/>
    
  </section>);
}


const skill = () => { 
  return (<article> skill </article>);
}

ReactDOM.render(<Main />, document.getElementById('root'));
