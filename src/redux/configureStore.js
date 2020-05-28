import { createStore } from 'redux'
import { Reducer , initialState } from './reducer'

// Now, this ConfigureStore function is required because that is how I'm going to configure my store.
export const configureStore = () => {
    // Now, when you configure a store you will need to create the store here.
    const store = createStore(
        Reducer ,
        initialState
    );

    return store
}