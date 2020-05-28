import { DISHES } from "../shared/dishes"
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'
import {PROMOTIONS} from '../shared/Promotions'

export const initialState = {
    // so basically we stored all the data of DISHES in dishes a new object
    SelectedDish : null,
    dishes : DISHES,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    leaders : LEADERS
}

// this is reducer function which is going to recieve current state and action
// we cannot change state directly here we can only apply for immutable change and can return updated version of
// state from this reducer
// Now, when the reducer is called initially, at the start of your application your state will be uninitialized. 
// Now, when your application is started you want to initialize your state to the initial step , 
// that we have just specified earlier. What is this initial state? This initial state contains four properties,
//  dishes, comments, promotions, and leaders.
export const Reducer = (state = initialState , action) => {
    return state;   // with this we are returning present state
}