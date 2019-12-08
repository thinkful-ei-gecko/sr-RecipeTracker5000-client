import React, { Component } from "react";
import ApiContext from "../../../ApiContext";
import { Link } from 'react-router-dom';
import { getRecipesForHousehold } from "../../../recipes-helpers";



class TrackerMain extends Component {
  state = {
      household: [],
      recipe: []
      };

  static contextType = ApiContext;

deleteHousehold = householdId => {
    this.setState({
      household: this.state.household.filter(
        household => household.household_id !== householdId
      )
    })
  }

render() {
    return(
      <section className="RecipePageContainer">
          <h3 className="RecipePageList-title">Recipes for {household.household_title}</h3>
              <Link
              to="/AddRecipe"
              type="button"
              className="AddRecipeButton"
              > Create New Recipe
              </Link>
          
            <ul className="RecipeListNav-List">
            {getRecipesForHousehold.map(recipe => 
                <li className="recipe-list" key={recipe.id}>
                <div className="RFH-Title">
                    {recipe.title}
                </div>
                <div className="RFH-Ingredients">
                    {recipe.ingredients}
                </div>
                    <div className="RFH-HousholdAssoc">
                        {recipe.householdId}
                    </div>
                </li>
                )}  
                </ul>
            </section>
            )
        }
}

export default TrackerMain;