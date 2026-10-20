import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick=()=>{
    let newtext=text.toUpperCase()
    SetText(newtext)
  props.showalert("converteed to upppercase","success")
  }

  const handleloclick=()=>{
    let newtext=text.toLowerCase()
    SetText(newtext)
     props.showalert("converted to lowercase","success")
  }
   const onchange=(e)=>{//onChange = jab input ki value badle, tab ye function chalao
    console.log("onchnge");
    SetText(e.target.value);
  }

  const handlecopy=()=>{
    console.log("ccopy text")
    var text=document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("copied","success")
  }

  const handleextraspace=()=>{
    console.log("ccopy text")
    let newtext=text.split(/[ ]+/);
    SetText(newtext.join(" "))
     props.showalert("remove extra space","success")
  }
  const [text, SetText] = useState(" ");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onchange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="mybox"
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleupclick}>Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleloclick}>Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlecopy}>copy text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleextraspace}>remove extra space</button>
      </div>
    </div>
    <div className="container my-1"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{text.split(".").length-1 + text.split("!").length-1 + text.split("?").length-1} sentence</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"enter something to preview"}</p>
      
    </div>
    </>
  );
}
