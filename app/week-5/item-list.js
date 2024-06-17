"use client";
import React from 'react';
import Item from './item.js';
import items from './items.json';
import { useState } from 'react';


export default function ItemList() {

    const [sortBy, setSortBy] = useState('name');
    const [grouped, setGrouped] = useState(false);

    items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <ul>
            <button className={`${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`} onClick={() => setSortBy('name')} >Sort by Name</button>
            <button className={`${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded`} onClick={() => setSortBy('category')}>Sort by Category</button>
            
            {items.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </ul>
        
    );
}


  