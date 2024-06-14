import { Grid, Form, Input} from "semantic-ui-react";
import { useState } from "react";

const Searchs = ({setSearchedQuery}) => {
    const [value, setvalue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">Search Recipes with<span style={{color:'#2185D0'}}> Kitchen Secrets</span></h2>
                <h4>Input Recipes seperated by comma</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input
                        placeholder = "potato,onion,tomato,chill"
                        action={{ icon: 'search', color: 'blue'}}
                        onChange={(e) => setvalue(e.target.value)}
                        value = {value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}
export default Searchs;