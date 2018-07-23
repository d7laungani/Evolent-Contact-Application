import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import contactPageReducer from '../pages/ContactsPage/reducks/contactpage.reducer';




export const rootReducer = combineReducers({
    contactpage: contactPageReducer
})
