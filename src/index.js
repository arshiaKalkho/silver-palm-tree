import React from 'react';
import ReactDOM from 'react-dom';


function Main() {
  return (<section>
    <Experiences/>
    <Experiences/>
    <Experiences/>
    <Experiences/>
    <Experiences/>
    </section>);
}


const Experiences = () => { 
  return (<article> Experiences </article>);
}

ReactDOM.render(<Main />, document.getElementById('root'));
