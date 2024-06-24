"use client";

import { useState } from "react";
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <main>
      <p className='text-2xl font-bold'>Shopping List</p>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
}