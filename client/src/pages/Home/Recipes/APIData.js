import { useContext } from "react";
import SearchItem from "./SearchItem";
import Recipe from "./Recipe";

import { H1 } from "../../Contact";
import { H3 } from "../../UserAccount/Login";
import styled from "styled-components";
import { RecipesInfoContext } from "./RecipesInfo";

const APIData = () => {

    const { recipes, error, getRecipes } = useContext(RecipesInfoContext);

    return (
        <Div>
            <H1>Search Recipes</H1>
            <H3>Use key words to find recipes!</H3>
                <SearchItem getRecipes={getRecipes} />
            <Card>
                {recipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe.recipe} />
                ))}
            </Card>
            {error &&<p>{error}</p>}
        </Div>
    )
}; 

const Div = styled.div`
    text-align: center;
    margin: 20px;
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export default APIData;