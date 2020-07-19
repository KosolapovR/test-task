import {applyMiddleware, createStore, combineReducers} from 'redux';
import giraffesPage from './giraffe';
import reduxThunk from 'redux-thunk';

export const configureStore = () => {
    const rootReducer = combineReducers({giraffesPage});
    return createStore(rootReducer, applyMiddleware(reduxThunk));
};
