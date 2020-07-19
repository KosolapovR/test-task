import {applyMiddleware, createStore, combineReducers} from 'redux';
import giraffesPage from './giraffe';
import reduxThunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

export const configureStore = () => {
    const rootReducer = combineReducers({giraffesPage, form: formReducer});
    return createStore(rootReducer, applyMiddleware(reduxThunk));
};
