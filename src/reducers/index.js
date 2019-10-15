import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
// import dashboardReducer from './dashboardReducer';
const rootReducer = combineReducers({ 
    form:formReducer, 
    // dashboardReducer
});

export default rootReducer;