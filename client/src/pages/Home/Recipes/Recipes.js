import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

const Recipes = ({ recipes }) => {

    return (
        <Div>
            {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe.recipe} />
            ))}
        </Div>
    )
};

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export default Recipes;