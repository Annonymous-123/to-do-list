import React,{useState} from "react";

function App() {
  
  const[listItem, setListItem]=useState("");
  const[items,setItems]=useState([]);
  // const items= [];
  function ChangeHandler(event){
   const value=event.target.value;
   setListItem(value);
  };
  function AddItem(){
    setItems((prevValue)=>{
      return[...prevValue,listItem];
    });
    setListItem(""); 
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={ChangeHandler} type="text" value={listItem} />
        <button onClick={AddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item)=>{
            return(<li>{item}</li>)
          }) 
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
