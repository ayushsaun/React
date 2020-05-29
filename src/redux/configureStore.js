import { createStore , combineReducers } from 'redux'
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'

// Now, this ConfigureStore function is required because that is how I'm going to configure my store.
export const configureStore = () => {
    // Now, when you configure a store you will need to create the store here.
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders
        })
    );

    return store
}