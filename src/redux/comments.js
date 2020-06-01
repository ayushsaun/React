import {COMMENTS} from '../shared/Comments'
import * as ActionTypes from './ActionTypes'
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length
            comment.date = new Date().toISOString()
            // since we cannot directly modify state we can add to it and then return modified state
            // for this we are going to use concat method this way we are not changing state
            // we r just concating it
            return state.concat(comment);
            // when we restart application any comment we added from form will be lost completely
        default:
            return state;
    }   
}