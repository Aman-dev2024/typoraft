import React, { useState } from 'react'

export default function Textarea() {
  const changeTextColor=()=>{
    document.getElementById("floatingTextarea2").style.color="orange";
  }
  const[text,setText]=useState("");
  const changeTextToUpperCase=()=>{
    setText(text.toUpperCase())
  }
  const changeCase=(e)=>{
    setText(e.target.value)
  }
  const ChangeTextToItalic=()=>{
    document.getElementById("floatingTextarea2").style.fontStyle="italic";
  }
  const clearText=()=>{
    setText("")
  }
  return (
    <div>
      <h1 style={{marginLeft:"40px", paddingTop:"50px"}}>Enter the text to analyize</h1>
    <div className="form-floating">
  <textarea onChange={changeCase} value={text} className="form" id="floatingTextarea2" style={{height: "100px", width:"95%", marginLeft:"25px"}}></textarea>
</div>
<div className="buttons" style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
<button type="button" className="btn btn-primary" onClick={changeTextColor}>Chnage Text Color</button>
<button type="button" className="btn btn-primary" onClick={changeTextToUpperCase}>Change Text To UpperCase</button>
<button type="button" className="btn btn-primary" onClick={ChangeTextToItalic}>Change Text To Italic</button>
<button type="button" className="btn btn-primary" onClick={clearText}>Clear Text</button>
</div>
<div className="paraText" style={{marginLeft:"50px", marginTop:"40px"}}>
<p style={{marginBottom:"20px"}}>Summary of text: {text}</p>
<p style={{marginBottom:"20px"}} >Number of letters: {text.length}</p>
<p style={{marginBottom:"20px"}}>Number of words: {text.trim()===""?0: text.trim().split(/\s+/).length}</p>
</div>
</div>
  )
}
