import config from './config';

export const deleteHouseholdFetch = householdId => {
    return fetch(`{config.API_ENDPOINT}/household/${householdId}`, {
        method: 'DELETE',   
        headers: {
            "content-type": "application/json"
        }
    })
}

export const deleteRecipeFetch = recipeId => {
    return fetch(`${config.API_ENDPOINT}/recipe/${recipeId}`, {
        method: 'DELETE',
        headers: {
            "content-type": "application/json"
        }
    })
}

export const addHouseholdFetch = newHousehold => {
    return fetch(`${config.API_ENDPOINT}/household`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newHousehold)
    
    })
}

export const addRecipeFetch = newRecipe => {
    return fetch(`${config.API_ENDPOINT}/recipe`, {
        method: "POST",
        headers: {
            "content-type": "application.json"
        },
        body: JSON.stringify(newRecipe)
    })
}

export const getRecipesForHousehold = (recipe = [], householdId) => (
    (!householdId)
    ? recipe
    : recipe.filter(recipe => recipe.householdId === Number(householdId))
)