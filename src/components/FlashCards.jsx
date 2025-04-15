import React, { useState } from 'react'

export default function FlashCards() {
const [selectedId,setSelectedId]=useState(3);
 function handleClick(id){
    setSelectedId(id!== selectedId?id:null)

 }
    const question=[
        {
            id:1,
            question:"hello",
            asnwer:"hi"
        },{
            id:2,
            question:"how to pass  data from parent to child",
            asnwer:"props"
        },{
            id:3,
            question:"how to give components memory",
            asnwer:"usestate hook"
        },{
            id:4,
            question:"hello",
            asnwer:"hi"
        }
    ]
  return (
    <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}} >
        {question.map((question)=>(
            <div key={question.id} onClick={()=>handleClick(question.id)} style={{width:"200px",height:"200px",backgroundColor:"red"}}>{ question.id===selectedId ? question.asnwer:question.question} </div>
    ))}
        
    </div>
  )
}
