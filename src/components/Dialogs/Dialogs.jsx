import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'


const Dialogs = (props) => {

let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

let messagesElements = props.state.messagesData.map( m => <Message message = {m.message} id = {m.id}/>);

let addMessageElements = React.createRef();

let addNewMessage = () => {
    props.addNewMessage()
}

let onMessageChange = () =>{
    let text = addMessageElements.current.value;
    props.updateNewMessage(text);
}

    return (
        <div className ={s.dialogs}>
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
        </div>
    )
}
export default Dialogs