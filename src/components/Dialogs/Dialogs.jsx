import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = () => {

let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Danil'},
    {id: 4, name: 'Vitalya'},
    {id: 5, name: 'Misha'},
]

let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'is'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'name'},
    {id: 5, message: 'Hi'}
]

let dialogsElements = dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

let messagesElements = messagesData.map( m => <Message message = {m.message} id = {m.id}/>);


    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs