import { useEffect } from "react";
import { getRecipe } from "../Services/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid , Image, Header, Segment} from "semantic-ui-react";
import { Link } from "react-router-dom";


const RecipeDetails = () => {
    const [recipe,setRecipe] = useState({});
    const {recipeId} = useParams();

    useEffect(() => {
      const getData = async() => {
       let result = await getRecipe(recipeId)
       if (result && result.recipe) {
          setRecipe(result.recipe);
       }
      }
      getData();
    },[])
     
    return (
        Object.keys(recipe).length >0?
        <Grid container stackable columns={2} className="detailsPageContent">
            <Grid.Column>
                <Button
                   as={Link}
                   to={'/recipes'}
                   content="Back to Recipe List"
                   color="yellow"
                   style={{marginBottom:40}}
                />
                <Image src={recipe.image_url}/>
            </Grid.Column>
            <Grid.Column>
                <Header size="medium">{recipe.title}</Header>
                <p style={{color:"violet"}}>Provided By: {recipe.publisher}</p>
                <Button
                   as={"a"}
                   href={recipe.publisher_url}
                   target="_blank"
                   content="Publisher Webpage"
                   color="blue"
                />
                <Button
                   as={"a"}
                   href={recipe.source_url}
                   target="_blank"
                   content="Recipe URL"
                   color="green"
                />
                <Header size="large" content="Ingredients" color="black"/>
                <Segment.Group>
                    {
                        recipe && recipe.ingredients.map(data => (
                            <Segment color="black">
                                <h5 style={{color:"black"}}>{data}</h5>
                            </Segment>
                        ))
                    }
                </Segment.Group>
            </Grid.Column>
        </Grid> : null
    )
}
export default RecipeDetails;