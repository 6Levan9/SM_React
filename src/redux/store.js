
import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';


let store = {
  _state:{
    profilePage: {
      posts: [ ],
      newPostText:''
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: " 3" },
        { id: 4, name: " 4" },
        { id: 5, name: " 5" },
        { id: 6, name: " 6" },
        { id: 7, name: " 7" }
      ],
      messages: [{ id: 6, message: " 6" },
                { id: 7, message: " 7" }
                ],
      
      newMessageBody: ""
    },
  

    sidebar: [
      { id: 1, name: " 1" },
      { id: 2, name: " 2" },
      { id: 3, name: " 3" }
    ]
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action) { 

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    
    this._callSubscriber(this._state);

  }
}







window.state = store;
export default store;
