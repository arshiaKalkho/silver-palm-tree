import React from "react";

export default function ScrollTo(props) {
 const location = props.location;
 const text = props.text;
  // Show button when page is scorlled upto given distance
  

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollTo = () => {
    window.scrollTo({
      top: location,
      behavior: "smooth"
    });
  };

 

  return (
    
      
        <button  onClick={scrollTo}>
         {text}
        </button>
    
  );
}
