import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

let state = props.store.getState().messagesPage

let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageCreator())
}

let onNewMessageChenge = (body) =>{
    props.store.dispatch(updateNewMessageBodyCreator(body))
}

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChenge} sendMessage = {onSendMessageClick} messagesPage = {state}/>
    )
}
export default DialogsContainer

