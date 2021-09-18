import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Body from './Body'
import "./App.css";

function Main() {
  return (
  <div className="index">
    <Header/>
    <Body/>
    <Footer/>
    
  </div>);
}


// const skill = () => { 
//   return (<article> skill </article>);
// }

ReactDOM.render(<Main />, document.getElementById('root'));
