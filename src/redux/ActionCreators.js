// this is to import everything as action type in this folder
import * as ActionTypes from './ActionTypes'
import { DISHES } from "../shared/dishes"

//this is a function that creates action object
export const addComment =  (dishId , rating , author , comments) => ({
    //every action object must contain type
    type: ActionTypes.ADD_COMMENT,

    // The payload contains whatever needs 
    // to be carried in so the data that is sent back by the addComment.
    //it is a very natural way of specifying whatever data needs to be carried in the action 
    // object to the reducer function 
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comments: comments
    }
})

// we are going to create this as thunk thats why its going to return a function thats why empty ()
// and inside that there will be another function 
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES)); // This is going to push dishes into state of our store there
    }, 2000); // it is going to return function after 2000ms delay
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
//we send this to the store 