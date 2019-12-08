import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from '../config'

class AddRecipe extends Component {
  state = {
    title: "",
    ingredients: "",
    id: "",
    householdId: ""
  };

  static contextType = ApiContext;

  handleAddRecipe = e => {
    e.preventDefault();

    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      householdId: this.state.householdId
    }

    fetch(`${config.API_ENDPOINT}/recipe`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRecipe)
    })
      .then(res => {
        if(!res.ok) 
        return res.json()
        .then(e => Promise.reject(e))
        return res.json()
      })
      .then(response => 
        this.context.addNewRecipe(response))
        .then(
        this.props.history.push('/')
        )
      }
        // .catch(error => {
        //   alert(error.message)
        // })
      
      
      updateHouseholdId = (selectedId) => {
        this.setState({
          householdId: selectedId
        })
      }

      updateTitle = (title) => {
        this.setState({
            title: title
          })
      }

      updateIngredients = (e) => {
        this.setState({
          ingredients: e.target.value
          })
      }
      
    onChangeHandle = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addNewRecipe = newRecipe => {
      this.setState({
        recipe: [...this.state.recipe, 
          newRecipe
        ]
      });
    }
    
  render() {
    const householdList = this.context.household.map (household => {
    return (
      <option key= {household.id} value={household.id}>{household.title}</option>
    )
    })

    
    return (
      <section className="add-recipe-something">
        <h2>Add Recipe</h2>
        <form onSubmit={this.handleAddRecipe}>
          <label htmlFor="add-recipe-title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={e => this.updateTitle(e.target.value)}
          ></input>
          <label htmlFor="add-recipe-ingredients" className="add-recipe-label">
            Recipes Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            onChange={this.updateIngredients}
          />
          <label htmlFor="add-householdId" className="add-householdId">
            Add to Household:
          </label>
          <select
            id="household"
            name="household"
            onChange={e => this.updateHouseholdId(e.target.value)}
            defaultValue="Select Household"
          >
            <option>Select Household</option>
            {householdList}
          </select>
          <button type="submit">New Recipe</button>
        </form>
      </section>
    );
  }
};

export default AddRecipe;
