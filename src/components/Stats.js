import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <em> <p className="stats"> start adding some items to your packing list </p></em>
    );


  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "you got everything! Ready to go ✈️" : ` you have ${numItems} items on ur list, and u already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
