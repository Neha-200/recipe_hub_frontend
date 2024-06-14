import Searchs from "../components/Searchs";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../Services/api";
import { useEffect, useState } from "react";

const Recipes = ()=>{

    const [searchedQuery,setSearchedQuery] = useState("Chicken");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => { 
        getSearchedResult();
    },[searchedQuery])

    const getSearchedResult = async() => {
       let result = await getRecipes(searchedQuery);
       if (result && result.recipes) {
        setRecipes(result.recipes);
       }
    }
    return (
        <>
            <Searchs setSearchedQuery={setSearchedQuery}/>
            <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
        </>
    )
}

export default Recipes;