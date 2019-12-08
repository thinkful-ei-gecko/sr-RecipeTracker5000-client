import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from '../config'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getRecipesForHousehold } from "../Service";
import './RecipeFromHouseholds.css';


class RecipeFromHouseholds extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = ApiContext;

  handleDeleteRecipe = recipeId => {
    return fetch(`${config.API_ENDPOINT}/recipe/${recipeId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteRecipe(recipeId);
      })
      .catch(error => {
        console.error({ error });
      });
  }

  // getRecipes = GetRecipesForHousehold => {

  // }
  
  render() {
    console.log(this.props.match.params)
    // const getRecipesForHousehold = this.context
    const { household } = this.context
    return (
      <section className="recipe-display">
        <div className="recipes-button-container">
          <Link to="/AddRecipe">
                <button type="submit" className="create-recipe-button">
                  Add
                </button>
              </Link>
        <Link to="/">
          <button>Back</button>
        </Link>
        <FontAwesomeIcon
                icon={faTrash}
                className="delete-button"
                type="button"
                onClick={() => this.handleDeleteRecipe}
              ></FontAwesomeIcon>
        </div>
        <h2 className="recipe-display-title">
          Recipes for {getRecipesForHousehold.title}
        </h2>
        <ul className="display-recipe-list">
          {this.context.recipe
          .filter(recipe => recipe.householdId == this.props.match.params.householdId)
          .map(recipe => (
            <div key={recipe.id}>
              <Link
                className="Rec-HH-Association"
                to={`/${household.id}/Recipe`}
                style={{ textDecoration: "none" }}
              >
                {recipe.title}
              </Link>
              {/* <li className="title">{recipe.title}</li>
              <li className="ingredients">{recipe.ingredients}</li>
              <li className="householdId">{householdId}</li> */}
              
            </div>
          ))}
        </ul>
        <div>
        
        </div>
      </section>
    );}
  };


export default RecipeFromHouseholds;
