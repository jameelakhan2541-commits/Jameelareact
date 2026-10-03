import { useState } from "react";
function Task1(){
const [name,setName]=useState("");
return(
    <div className="form-container">
<h1 className="form-heading">Student Form</h1>
<input
type="text"
value={name}        
onChange={(e)=>setName(e.target.value)} 
placeholder="Enter your name"  
className="form-input"             
/>
<h2 className="form-result">Your Name: {name}</h2>
    </div>
)




}
export default Task1;