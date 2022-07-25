import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = (" ");
    setText(newText);
  };
  const handleCapitalClick = () => {
    //  let newText=  text.charAt(0).toUpperCase();
    //  setText(newText+text.slice(1));
    // let newText = text[0].toUpperCase();
    // setText(newText+text.slice(1));
    let CapitalizeWords = text[0].toUpperCase();  
    for (let i = 1; i <= text.length - 1; i++) {  
        let currentCharacter,  previousCharacter = text[i - 1];  
        if ( previousCharacter === ' ') {  
            currentCharacter = text[i].toUpperCase();  
        } else {  
            currentCharacter = text[i];  
        }  
        CapitalizeWords = CapitalizeWords + currentCharacter;  
    }  
    setText(CapitalizeWords);
  };
  const handleCopyText = () => {
    let newText = document.getElementById("My-Box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
        <div className="mb-3">
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="My-Box" rows="5" ></textarea>
         </div>
 <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>convert to uppercase  </button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>convert to lowercase  </button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text  </button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleCapitalClick}>Capitalize first letter  </button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleCopyText}>Copy text  </button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces  </button>


          </div>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
              <h2>Your text summary</h2>
              <p>{text.split(" ").length} words and {text.length} character</p>
              <p>{.008 * text.split(" ").length} Minutes read</p>
              { <h2>Preview</h2> }
              <p className="">{text.length>0?text : "Enter your text to preview here"}</p>
          </div>
    </>
  );
}
