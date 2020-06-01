// this is to import everything as action type in this folder
import * as ActionTypes from './ActionTypes'

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

//we send this to the store 