import React,{useState} from "react";

function InputArea(props) {
  const[inputText, setInputText]=useState("");
  function ChangeHandler(event){
   const value=event.target.value;
   setInputText(value);
  };
  return (
    <div className="form">
      <input onChange={ChangeHandler} type="text" value={inputText} />
      <button onClick={()=>{props.whenClicked(inputText);
                           setInputText("");
        }}>
      <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
