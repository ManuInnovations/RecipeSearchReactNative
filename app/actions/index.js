import * as RecipeActions from './recipes';

export const ActionCreators = Object.assign({},
  RecipeActions,
);



//All of the recipe actions ie. to 'star' a recipe or set searched recipes will be functions described in the recipes.js file.  Using this syntax imports them all as an object and groups them.
