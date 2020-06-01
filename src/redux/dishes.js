import * as ActionTypes from './ActionTypes'

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false , errMess: null , dishes: action.payload } // so here we are using value passed to the payload of that action as parameter

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true , errMess: null , dishes: [] } //  it is going to take initial state and whatever we passed after it as modification to it
            // so when loading is true we are going to add a loading spinner to show that something is loading we are going to do that in loadingComponent.js in components folder
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false , errMess: action.payload , dishes: [] }

        default:
            return state;
    }   
}