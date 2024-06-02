import { createContext, useState } from "react";

export const RecipesInfoContext = createContext();

const RecipesInfoProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    const [list, setList] = useState([]);
    const [error, setError] = useState("");
  
  
    const getRecipes = async (search) => {
  
        const apiUrl = `https://api.edamam.com/search?q=${search}&app_id=55fdfb04&app_key=92f8d3d1f1458eee8622b79e5e61af91`;
  
        try {
        const response = await fetch(apiUrl);
  
        const recipesData = await response.json();
        console.log(recipesData.hits);
        setRecipes(recipesData.hits);
  
        } catch (error) {
            console.log(error);
            setError("This item does not exist on our platform! Please try another search.")
        }
    };

    
    return (
        <RecipesInfoContext.Provider value={{ list, setList, recipes, error, getRecipes }}>
            {children}
        </RecipesInfoContext.Provider>
    )};

    export default RecipesInfoProvider;