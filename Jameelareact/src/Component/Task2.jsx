import { useState } from "react";
function Task2(){
const[message,setMessage]=useState("Hello");
function changeMessage(){
  if (message ==="Hello"){
setMessage("Welcome to react");
  }else{ 
setMessage  ("Hello")
}
}
return(
  <div className="form-container">
<h1 className="form-heading">{message}</h1>
<button className="button"
onClick={changeMessage}>
changeMessage
</button >
  </div>
);
}
export default Task2
