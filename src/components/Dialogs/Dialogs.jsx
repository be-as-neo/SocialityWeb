import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'

const Dialogs = (props) => {

let state = props.store.getState().messagesPage

let dialogsElements = state.dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

let messagesElements = state.messagesData.map( m => <Message message = {m.message} id = {m.id}/>);

let newMessageBody = state.newMessageBody

let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageCreator())
}

let onNewMessageChenge = (event) =>{
    let body = event.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
}

    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            <div className = {s.textAreaSittings}>
                <textarea onChange = {onNewMessageChenge} placeholder="Enter your message"  value = {newMessageBody}></textarea>
                <button onClick = {onSendMessageClick}>Send</button>
            </div>
            </div>
        </div>
    )
}
export default Dialogs

{/* <div className ={s.dialogs}>
<div className = {s.dialogsItems}>
    {dialogsElements}
</div>
<div className = {s.messages}>
    {messagesElements}
<div className = {s.textAreaSittings}>
    <textarea onChange = {onMessageChange} placeholder="Enter your message" ref = {addMessageElements} value = {props.newMessage}></textarea>
    <button onClick = {addNewMessage}>Send</button>
</div>
</div>
</div> */}