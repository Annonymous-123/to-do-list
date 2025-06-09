import React,{useState} from "react";
import ToDoItem from "./ToDoItems.jsx";
import InputArea from "./InputArea.jsx";

function App() {  
const[items,setItems]=useState([]);

  function addItem(inputText){
    setItems((prevValue)=>{
      return[...prevValue,inputText];
    });
    // setListItem(""); 
  }
  
  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !==id;
      })
    })
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea whenClicked={addItem}/>
      <div>
        <ul>
        {items.map((item,index)=>{
            return(
              <ToDoItem
                key={index} 
                id={index} 
                toRemove={deleteItem} 
                text={item}/>)
          }) 
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
