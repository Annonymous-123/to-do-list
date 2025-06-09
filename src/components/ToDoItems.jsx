import React,{useState} from "react";

function ToDoItem(props){
  
  return(
     <li onClick={()=>{
        props.toRemove(props.id)
      }}>{props.text}</li>
  )
}
export default ToDoItem;



