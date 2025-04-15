import React, { useState } from "react";
import  Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => {
    if (a.packed === b.packed) return 0;
    return a.packed ? 1 : -1;
  });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'> sort by input order</option>
          <option value='description'> sort by description order</option>
          <option value='packed'> sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
