import React from "react";




export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => { onToggleItems(item.id); }}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}} key={item.id}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}> ❌</button>
    </li>
  );
}
