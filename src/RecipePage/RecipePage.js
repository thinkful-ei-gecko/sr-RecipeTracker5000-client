import React from "react";

import { Link } from 'react-router-dom';

export default class RecipePage extends React.Component {
    static defaultProps = {};

    state = {
        recipe: {}
    };

    // componentDidMount() {
    //     console.log(this.props.match.params);

    //     Promise.all([
    //         fetch(`${config.API_ENDPOINT}/recipe/recipe/${this.props.match.params.recipe_id}`, {
    //             headers: {
    //                 "content-type": "application/json",
    //             }
    //         }),
    //     ])
    //     .then(([recipeRes]) => {
    //         if (!recipeRes.ok) return recipeRes.json().then(e => Promise.reject(e));
    //         return Promise.all([recipeRes.json()]);
    //     })
    //     .then(([recipe]) => {
    //         this.setState({ recipe });
    //     })
    //     .then(error => {
    //         console.error({ error });
    //     });

    // }

    render() {
        console.log(this.props);
        return (
            <div className="Recipe">
            <h2 className="Recipe_title">{this.state.recipe.title}</h2>
            <Link
            to={{
                pathname: "/update",
                state: { recipe: this.state.recipe }
            }}
            className="Recipe_edit"
            type="button"
            recipe={this.state.recipe}
            >
            <button>Edit Recipe</button>
            </Link>
            </div>
        );
    }
}