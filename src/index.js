import React from 'react';
import Main from "./main";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



function index() {
  
  return (<>
    <Main/>
    </>
  )
}

export default index

ReactDOM.render(<Main />, document.getElementById('root'));