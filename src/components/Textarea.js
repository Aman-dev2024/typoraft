import React, { useState } from 'react'

export default function Textarea() {
  const changeTextColor=()=>{
    document.getElementById("floatingTextarea2").style.color="orange";
  }
  const[text,setText]=useState();
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
    document.getElementById("floatingTextarea2").value="";
  }
  return (
    <div>
      <h1 style={{marginLeft:"40px", paddingTop:"50px"}}>Enter the text to analyize</h1>
    <div class="form-floating">
  <textarea onChange={changeCase} value={text} class="form" id="floatingTextarea2" style={{height: "100px", width:"95%", marginLeft:"25px"}}></textarea>
</div>
<div class="buttons" style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
<button type="button" class="btn btn-primary" onClick={changeTextColor}>Chnage Text Color</button>
<button type="button" class="btn btn-primary" onClick={changeTextToUpperCase}>Change Text To UpperCase</button>
<button type="button" class="btn btn-primary" onClick={ChangeTextToItalic}>Change Text To Italic</button>
<button type="button" class="btn btn-primary" onClick={clearText}>Clear Text</button>
</div>
</div>
  )
}
