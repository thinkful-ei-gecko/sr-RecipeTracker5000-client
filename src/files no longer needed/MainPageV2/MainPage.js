//   fetch(`${config.API_ENDPOINT}/recipe`,
//   {
//     method: 'POST',
//     header: { "content-type": "application/json" },
//     body: NewRecipe
//   })
//     .then(res => {
//       if (!res.ok)
//         return res.json().then(e => Promise.reject(e));
//       return res.json();
//     })
//     .then(response => this.context.addRecipe(response))
//     .then(
//       this.props.history.push('/')
//     )
//     .catch(error => {
//       alert(error.message);
//     });
// };
// updateHouseholdId = household_id => {
//   this.setState({
//     title: {
//       value: household_id,
//       touched: true
//     }
//   });
// };

// updateTitle = title => {
//   this.setState({
//     title: {
//       value: title,
//       touched: true
//     }
//   });
// };

// handleUpdates = (e) => {
//   this.setState({
//     ingredients: {
//       value: ingredients,
//       touched: true
//     }
//   });
// };

// validateTitle() {
//   const title = this.state.title.value.trim();
//   if (title.length === 0) {
//     return "Title is required";
//   }
// }

// validatehouseholdelect() {
//   const householdIsSelected = this.state.household_id.value;
//   return !householdIsSelected;
// }
// AddRecipe.propTypes = {
//   household: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isReuqired,
//       title: PropTypes.string.isRequired
//     })
//   ),
//   addrecipe: PropTypes.func
// };

// handleChangerecipeIngredients = e => {
//     this.setState({ ingredients:{ value: e.target.value, touched: true } })
// };

//     validateRecipe() {
//         const title = this.state.title.value.trim();
//         if (title.length === 0) {
//             return "Recipe name is required";
//         }
//     }

//     validateIngredients() {
//         const ingredient = this.state.title.value.trim();
//         if (ingredient.length === 0) {
//             return "Ingredients are required";
//         }
//     }

//     validateHouseholdId() {
//         const household = this.state.household_id.value;
//         if (!household) {
//             return "Must select an exsisting household";
//         }
//     }

