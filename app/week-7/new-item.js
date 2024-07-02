"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) 
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function handleSubmit(event) 
    {
        event.preventDefault();
        const newItem = { id: Math.random().toString(36), name, quantity, category};
        console.log(newItem);
        onAddItem(newItem);
    
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    
    return (
        <div className="flex flex-col w-1/4 bg-slate-900	p-2 m-4">
            <p className="text-lg font-bold">New Item</p>
            <form className="flex flex-col p-2 m-4" onSubmit={handleSubmit}>
                <input 
                    id="name"
                    className="mb-4 p-2 text-black"
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required
                    autoComplete="name"
                />
                <input 
                    id="quantity"
                    className="mb-4 p-2 text-black"
                    type="number" 
                    placeholder="Quantity" 
                    min="1"
                    max="99"
                    value={quantity} 
                    onChange={(event) => setQuantity(Number(event.target.value))} 
                    required
                />
                <select
                    id="category"
                    className="mb-4 p-2 text-black"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}