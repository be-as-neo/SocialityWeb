import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        { (store)  => {        
            let state = store.getState().messagesPage
            let onSendMessageClick = () =>{
                store.dispatch(sendMessageCreator())
            }
    
            let onNewMessageChenge = (body) =>{
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody = {onNewMessageChenge} 
                            sendMessage = {onSendMessageClick} 
                            messagesPage = {state}/>
            }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer

