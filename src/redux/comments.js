import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch(action.type) {

        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false , errMess: null , comments: action.payload } // so here we are using value passed to the payload of that action as parameter
        
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false , errMess: action.payload , comments: [] }
    
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length
            comment.date = new Date().toISOString()
            // since we cannot directly modify state we can add to it and then return modified state
            // for this we are going to use concat method this way we are not changing state
            // we r just concating it
            return {...state, comments: state.concat(comment)};
            // when we restart application any comment we added from form will be lost completely

        default:
            return state;
    }   
}