export const findHousehold = (household = [], householdId) =>
  household.find(household => household.id === householdId);

export const findRecipe = (recipe = [], recipeId) =>
  recipe.find(recipe => recipe.id === recipeId);

  export const HouseholdsList = (household = [], householdId) =>
  household.map(households => households.id === householdId);

export const getRecipesForHousehold = (recipe = [], householdId) =>
  !householdId
    ? recipe
    : recipe.filter(recipe => householdId === recipe.householdId);

export const countRecipesForhousehold = (recipe = [], householdId) =>
  recipe.filter(recipe => recipe.householdId === householdId).length;
