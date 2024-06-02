import { useContext, useState } from "react";

import { RecipesInfoContext } from "./RecipesInfo";
import styled from "styled-components";

const Recipe = ({ recipe }) => {

    const [isClicked, setIsClicked] = useState(false);
    const [btnText, setBtnText] = useState("Add to My Favorites");


    const { list, setList } = useContext(RecipesInfoContext);

    const addRecipes = async (recipe) => {
        setList([...list, recipe]);
        setIsClicked(true);
        setBtnText("Added!")

        await fetch("/api/addFavorites", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe,
                name: recipe.label
            })
          });
    };


    return (
        <Div>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                <Img src={recipe.image} alt={recipe.label} />
                </a>
            <h2 style={{margin:"10px 0"}}>{recipe.label}</h2>
            <br/>
            <p>
                <u>Ingredients</u>: 
                <br/>
                {recipe.ingredientLines.join(", ")}
            </p>
            <p>
                <u>Calories</u>: 
                <br/>
                {Math.round(recipe.calories)}
            </p>
            <p><u>Diet Labels</u>: </p>
            {recipe.dietLabels.map((item, index) => (
                <>
            <div key={index}>
                {item}
            </div>
                </>
            ))}
            <p> 
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                <div style={{color:"black"}}><i>Click here to learn more about this recipe!</i></div>
                </a>
            </p>
            <br/>
            <button className="website-btn" disabled={isClicked} onClick={() => addRecipes(recipe)}>{btnText}</button>
        </Div>
    )
}; 

const Div = styled.div`
    width: 300px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    color: black;
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
`

export default Recipe;