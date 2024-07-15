"use client";
import React, { useState } from 'react';
import Item from './item.js';

export default function ItemList({ items, onItemSelect, onDeleteItem}) {
    const [sortBy, setSortBy] = useState('name');
    const [grouped, setGrouped] = useState(false);

    const sortedItems = () => {
        const clonedItems = [...items];

        if (grouped) {
            const categories = clonedItems.map(item => item.category);
            const uniqueCategories = [...new Set(categories)];
            return uniqueCategories.map(category => ({
                category,
                items: clonedItems.filter(item => item.category === category)
            }));
        } else {
            return clonedItems.sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'category') {
                    return a.category.localeCompare(b.category);
                }
                return 0;
            });
        }
    };

    return (
        <ul>
            <button
                className={`${!grouped && sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded m-1`}
                onClick={() => { setSortBy('name'); setGrouped(false); }}
            >
                Sort by Name
            </button>
            <button
                className={`${!grouped && sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded m-1`}
                onClick={() => { setSortBy('category'); setGrouped(false); }}
            >
                Sort by Category
            </button>
            <button
                className={`${grouped ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded m-1`}
                onClick={() => setGrouped(true)}
            >
                Group by Category
            </button>
            {!grouped ? 
                sortedItems().map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                )) :
                sortedItems().map(group => (
                    <li key={group.category} className="capitalize">
                        <strong>{group.category}</strong>
                        <ul>
                            {group.items.map(item => (
                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => onItemSelect(item)}
                                />
                            ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    );
}
