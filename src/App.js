import React, { Component } from "react";
import { Route } from "react-router-dom";
import ApiContext from "./ApiContext";
import MainPage from './MainPage/MainPage';
import RecipeFromHouseholds from "./RecipeFromHouseholds/RecipeFromHouseholds";
import AddHousehold from "./AddHousehold/AddHousehold";
import AddRecipe from "./AddRecipe/AddRecipe";
// import Recipe from "./Recipe/Recipe"
import config from "./config";

class App extends Component {
  state = {
    household: [],
    recipe: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/household`),
      fetch(`${config.API_ENDPOINT}/recipe`)
    ])
      .then(([householdRes, recipeRes]) => {
        if (!householdRes.ok)
          return householdRes.json().then(e => Promise.reject(e));
          if (!recipeRes.ok)
            return recipeRes.json().then(e => Promise.reject(e));

        return Promise.all([householdRes.json(), recipeRes.json()]);
      })
      .then(([ household, recipe ]) => {
        this.setState({  household, recipe });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  deleteHousehold = householdId => {
    this.setState({
      household: this.state.household.filter(
        household => household.household.id !== householdId
      )
    });
  };

  deleteRecipe = recipeId => {
    this.setState({
      recipe: this.state.recipe.filter(recipe => recipe.id !== recipeId)
    });
  };

  addNewHousehold = household => {
    this.setState({
      household: [...this.state.household, household]
    })
  };
  
  addNewRecipe = recipe => {
    this.setState({
      recipe: [...this.state.recipe, recipe]
    })
  };

  // updateRecipe = revisedRecipe => {
  //   const NewRecipe = this.state.recipe.map(recipe =>
  //     recipe.id === revisedRecipe.id
  //       ? Object.assign([], recipe, revisedRecipe)
  //       : recipe
  //   );
  //   this.setState({
  //     recipe: NewRecipe
  //   });
  // };

  render() {
    const value = {
      recipe: this.state.recipe,
      household: this.state.household,
      deleteRecipe: this.deleteRecipe,
      addNewRecipe: this.addNewRecipe,
      addNewHousehold: this.addNewHousehold,
      
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Route exact path="/" component={MainPage} />
          <Route path="/household/:householdId/RecipeFromHouseholds" component={RecipeFromHouseholds} />
          <Route path="/AddHousehold" component={AddHousehold} />
          <Route path="/AddRecipe" component={AddRecipe} />
          {/* <Route path="/:householdId/Recipe" component={Recipe} /> */}
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
