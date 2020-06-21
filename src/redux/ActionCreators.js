// this is to import everything as action type in this folder
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

//this is a function that creates action object
export const addComment =  (comment) => ({
    //every action object must contain type
    type: ActionTypes.ADD_COMMENT,

    // The payload contains whatever needs 
    // to be carried in so the data that is sent back by the addComment.
    //it is a very natural way of specifying whatever data needs to be carried in the action 
    // object to the reducer function 
    payload: comment
})

export const postComment = (dishId , rating , author , comment) => (dispatch) => {
   
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments' , {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    
    .then(response => {
        if (response.ok) {
            return response  // this response then become available to next response
        }
        else {
            var error = new Error('Error'+ response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); 
                    alert('Your comment could not be posted\nError: '+error.message);
                    }
        );
}

// we are going to create this as thunk thats why its going to return a function thats why empty ()
// and inside that there will be another function 
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')

        .then(response => {
            if (response.ok) {
                return response  // this response then become available to next response
            }
            else {
                var error = new Error('Error'+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //this will convert it into json
        // Now once we have done that, then we need to, Take that JSON.
        // So once the JSON, so this response.json will convert that to response.json and
        // then it will become available here.
        // And then we'll call that as the parameter as a dish, dishes parameter.
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
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




export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')

        .then(response => {
            if (response.ok) {
                return response  // this response then become available to next response
            }
            else {
                var error = new Error('Error'+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //this will convert it into json
        // Now once we have done that, then we need to, Take that JSON.
        // So once the JSON, so this response.json will convert that to response.json and
        // then it will become available here.
        // And then we'll call that as the parameter as a dish, dishes parameter.
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
                
        .then(response => {
            if (response.ok) {
                return response  // this response then become available to next response
            }
            else {
                var error = new Error('Error'+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //this will convert it into json
        // Now once we have done that, then we need to, Take that JSON.
        // So once the JSON, so this response.json will convert that to response.json and
        // then it will become available here.
        // And then we'll call that as the parameter as a dish, dishes parameter.
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

//we send this to the store 