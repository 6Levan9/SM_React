import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";





let mapStateToProps = (state) =>{
return {
    messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) =>{
return {
    updateNewMessageBody: () => {
        dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
