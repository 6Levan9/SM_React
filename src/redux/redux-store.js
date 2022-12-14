import {combineReducers, legacy_createStore} from "redux"
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = legacy_createStore(redusers);


export default store;