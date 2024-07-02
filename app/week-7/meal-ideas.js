import { useState, useEffect } from 'react';

// Define the function to fetch meal ideas from the API
const fetchMealIdeas = async (ingredient) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.meals || [];  // Ensure it returns an empty array if null
    } catch (error) {
        console.error("Failed to fetch meals", error);
        return []; // Return an empty array in case of an error
    }
};

const MealIdeas = ({ ingredient }) => {
    // Define state variable for storing meals
    const [meals, setMeals] = useState([]);

    // Define a function to load meal ideas
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    // Use useEffect to trigger loadMealIdeas when the ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // Render the component
    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals && meals.length > 0 ? (
                    meals.map(meal => (
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: '100px', height: '100px'}} />
                            <p>{meal.strMeal}</p>
                        </li>
                    ))
                ) : (
                    <p>No meals found for this ingredient.</p>
                )}
            </ul>
        </div>
    );
    
};

export default MealIdeas;
