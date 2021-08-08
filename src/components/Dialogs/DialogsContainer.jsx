import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
     sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;