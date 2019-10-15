import { createStore } from 'redux';
import rootReducer from '../reducers/index';

 const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}
const store = createStore(rootReducer);

export default store;