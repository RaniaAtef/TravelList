import { useState } from "react";
export default function Form({onAddItem}) {
    const [description , setDescription]=useState();
    const [quantity,setQuantity] =useState(1);
  
    function handleSubmit(e){
      e.preventDefault();
      const newItem={description,quantity,packed:false,id:Date.now()}
      console.log(newItem)
      setDescription("");
      setQuantity(1)
      onAddItem(newItem)
    }
    
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <p >what do u need for ur trip?</p>
        <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
         
          {Array.from({length:20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder="item.." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        <button>add</button>
      </form>
    );
  }