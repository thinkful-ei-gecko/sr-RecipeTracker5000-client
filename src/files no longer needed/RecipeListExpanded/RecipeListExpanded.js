import React, { Component } from "react";
import ApiContext from "../../ApiContext";

class RecipeListExpanded extends Component {
  static contextType = ApiContext;

  render() {
    const { title, ingredients, household_id } = this.props;
    return (
      <div className="recipe-list-page">
        <ul>
          {this.context.recipe.map(recipe => (
            <li key={recipe.id}>
              {title}
              {ingredients}
              {household_id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeListExpanded;

//       <section className="RecipeListMain">
//         <div className="RecipeListMain-Buttons">
//           <button
//             onClick={e =>
//               window.confirm(
//                 "This will completely delete the Household and recipe associated to it. Proceed?"
//               )
//             }
//             type="button"
//             className="RecipeListMain-add-recipe-button"
//           >
//             Delete Household
//           </button>
//         </div>
//         <ul>
//           {recipeForHousehold.map(recipe => (
//             <li className="RecipeInHousehold" key={recipe.id}>
//               <Recipe
//                 id={recipe.id}
//                 name={recipe.title}
//                 ingredients={recipe.ingredients}
//                 household_id={recipe.household_id}
//                 onDeleteRecipe={this.onDeleteRecipe}
//               />
//             </li>
//           ))}
//         </ul>
//         <div className="RecipeListMain-button-container">
//           <Link
//             tag={Link}
//             to={{
//               pathname: "/add-recipe",
//               state: { household_id: household_id }
//             }}
//             type="button"
//             className="RecipeListMain-add-item-button"
//           >
//             Add Recipe
//           </Link>
//         </div>
//       </section>
//     );
//   }
// }

//   constructor(props) {
//     super(props);
//     this.state = {
//       household: [],
//       recipe: []
//     };
//   }

//   onDeleteHousehold = household_id => {
//     this.setState({
//       household: this.state.household(
//         household => household.id !== household_id
//       )
//     });
//   };

//   componentDidMount() {
//     Promise.all([
//       fetch(`${config.API_ENDPOINT}/household`, {
//         headers: {
//           "content-type": "application/json"
//         }
//       }),
//       fetch(`${config.API_ENDPOINT}/recipe`)
//     ])
//       .then(([householdRes, recipeRes]) => {
//         if (!householdRes.ok) throw Error();
//         return Promise.all([householdRes.json(), recipeRes.json()]);
//       })
//       .then(([household, recipe]) => {
//         this.setState({ household, recipe });
//       })
//       .catch(error => {
//         console.error({ error });
//       });
//   }

//   handleDeleteHousehold = e => {
//     e.preventDefault();

//     const household_id = this.props.match.params.household_id;
//     console.log(this.props);

//     fetch(`${config.API_ENDPOINT}/household/${household_id}`, {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//       .then(res => {
//         if (!res.ok) return res.json().then(e => Promise.reject(e));
//         return;
//       })
//       .then(() => {
//         this.onDeleteHousehold(household_id);
//       })
//       .then(() => {
//         this.props.history.goBack();
//       })
//       .catch(error => {
//         console.error({ error });
//       });
//   };
