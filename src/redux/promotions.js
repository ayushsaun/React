import * as ActionTypes from './ActionTypes'

export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promotions: []
    }, action) => {
    switch(action.type) {
        
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false , errMess: null , promotions: action.payload } // so here we are using value passed to the payload of that action as parameter

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true , errMess: null , promotions: [] } //  it is going to take initial state and whatever we passed after it as modification to it
            // so when loading is true we are going to add a loading spinner to show that something is loading we are going to do that in loadingComponent.js in components folder
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false , errMess: action.payload , promotions: [] }

        default:
            return state;
    }   
}