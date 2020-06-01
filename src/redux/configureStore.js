import { createStore , combineReducers , applyMiddleware } from 'redux'
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Now, this ConfigureStore function is required because that is how I'm going to configure my store.
export const configureStore = () => {
    // Now, when you configure a store you will need to create the store here.
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders
        }),
        applyMiddleware(thunk , logger)  // Creates a store enhancer that applies middleware to the dispatch method of the Redux store. This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner, or logging every action payload.
    );

    return store
}