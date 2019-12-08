import React from "react";

export default React.createContext({
  household: [],
  recipe: [],
  addNewHousehold: () => {},
  addNewRecipe: () => {},
  updateRecipe: () => {},
  deleteHousehold: () => {},
  deleteRecipe: () => {}
});
