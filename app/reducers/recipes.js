import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({}, {

});

export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state, action) {
    return state + 1;
  }
});

//no store as such, just a series of transformations of state. Listen for the change of ADD_RECIPE and then return the state or state + 10 etc...
//
//every time you return state you are returning a new object. Everything else is destroyed. You need to return a new state.
//
//
