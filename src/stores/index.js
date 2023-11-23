import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

function reduxStore(initialState) {

    const logger = createLogger();
    const store = createStore(
        reducer,
        applyMiddleware(thunk, logger),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store
}
export default reduxStore;