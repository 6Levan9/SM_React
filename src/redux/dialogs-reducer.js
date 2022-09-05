let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: " 1" },
        { id: 2, name: " 2" },
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
  }

const dialogsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 7, message: body })
            return state; 
            default:
                return state;  
    }
 
    
}
export const sendMessageCreator  = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;