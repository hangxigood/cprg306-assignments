"use client";

import { useState, useEffect } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';  // Import the MealIdeas component
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service.js";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async (user) => {
    const items = await getItems(user.uid);
    setItems(items);
  }

  const handleAddItem = (item) => {
    item.id = addItem(user.uid, item);
    setItems([...items, item]);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      loadItems(user);
    }
  }, [user, router]);

  // Event handler for selecting an item from the list
  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0]  // Assume items are stored as 'name, descriptor'
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <main className='flex'>
      <div className='w-1/2 p-4'>
        <p className='text-2xl font-bold'>Shopping List</p>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem}/>
      </div>
      <div className='w-1/2 p-4'>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
