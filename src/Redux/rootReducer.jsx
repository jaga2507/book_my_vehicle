import { combineReducers } from "redux";
import rentReducer from './rentReducer'
import userReducer from './userReducer'


export const rootReducer = combineReducers({
    user: userReducer,
    rent: rentReducer
});