import React from 'react';
import ReactDOM from 'react-dom';
import Skill from './Skill';
import Header from './Header';
import Footer from './Footer';
import "./App.css";

function Main() {
  return (
  <section>
    <Header/>
    <Skill/>
    <Footer/>
    
  </section>);
}


const skill = () => { 
  return (<article> skill </article>);
}

ReactDOM.render(<Main />, document.getElementById('root'));
