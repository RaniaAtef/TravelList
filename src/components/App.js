import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  PackingList from "./PackingList";
import  Stats  from "./Stats";


export default function App() {
  const [items,setItems]=useState([]);

  function handleItem(item){
    setItems((items)=>[...items,item])

  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id!==id))

  }
  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item))

  }

  function handleClearItems(){
    const confirmed=window.confirm(" are you sure you want to delete all items?");
   if(confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
    // <div className='steps'>
    // <div className='numbers'>
    //   <div className={step>=1?'active':''}>1</div>
    //   <div className={step>=2?'active':''}>2</div>
    //   <div className={step>=3?'active':''}>3</div>
    // </div>
    // <p className='message'>step {step}:{messages[step-1]}</p>
    // <div className='buttons'>
    //   <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>Previous</button>
    //   <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
    // </div>
    // </div>
  );
}




