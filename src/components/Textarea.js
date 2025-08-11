import React from 'react'

export default function Textarea() {
  return (
    <div>
    <div class="form-floating">
  <textarea class="form" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px", width:"95%", marginTop:"100px", marginLeft:"25px"}}></textarea>
</div>
<div class="buttons" style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
<button type="button" class="btn btn-primary">Chnage Text Color</button>
<button type="button" class="btn btn-primary">Change Text To UpperCase</button>
<button type="button" class="btn btn-primary">Change Text To Italic</button>
<button type="button" class="btn btn-primary">Clear Text</button>
</div>
</div>
  )
}
