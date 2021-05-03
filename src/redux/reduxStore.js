import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import usersReducer from "./usersReduser";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;