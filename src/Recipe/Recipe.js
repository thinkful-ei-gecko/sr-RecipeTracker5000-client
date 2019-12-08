import React from "react";
import config from "../config";

export default class Recipe extends React.Component {
  static defaultProps = {
    onDeleteRecipe: () => {}
  };

  handleClickDelete = e => {
    e.preventDefault();

    const recipeId = this.props.id;
    console.log(this.props);

    fetch(`${config.API_ENDPOINT}/recipe/${recipeId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return;
      })
      .then(() => {
        this.props.onDeleteRecipe(recipeId);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    // const { title, id } = this.context
  return (
    <div className="recipe-full-display">
      <h2 className="recipeNav-title">recipe:</h2>
    <ul className="recipe_title">
      {this.context.recipe.map(recipe => (
      <div key={recipe.id}>
      <Link
      className="household-link"
      to={`/household/${household.id}/RecipeFromHouseholds`}
      ><li className="household-titles">{recipe.title}</li>
      </Link>
      </div>
    </ul>
    </div>
      
      ))}
      )}
    }
{/* <div className="RecipeDeleteButtonWrapper">
<button className="RecipeDeleteButton"
type="button" onClick=
>
{e => window.confirm("Are you sure?") && this.handleClickDelete(e)}>
Delete Item
</button>
</div> */}
