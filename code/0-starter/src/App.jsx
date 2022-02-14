import React from "react";
import RecipeTitle from "./recipeTitle";
import "./index.css";
import IngredientsList from "./ingredientsList";

function App() {
    const recipe = {
        title: 'Mashed potatotoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            {name: '3 potatoes, cut into 1/2" pieces', prepared: false},
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ]
    };
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle title = { recipe.title } feedback = { recipe.feedback }/>
            <IngredientList ingredients={recipe.ingredients} />
        </article>
    )
}

export default App;