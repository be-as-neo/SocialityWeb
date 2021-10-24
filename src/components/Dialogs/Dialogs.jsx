import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'

const DialogItem = (props) =>{
    return(
        <div className = {s.dialog + ' ' + s.active}>
        <NavLink to = {"/dialogs/" + props.id} activeClassName = {s.activeLink}>{props.name}</NavLink>
     </div>
    )
}

const Messege = (props) => {
    return(
    <div className={s.messege}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Danil'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Misha'},
    {id: 6, name: 'Alina'}
]

let dialogsElements = dialogsData
    .map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'is'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'name'},
    {id: 5, message: 'Hi'}
]

let messagesElements = messagesData.map( m => <Messege message = {m.message} id = {m.id}/>);

const Dialogs = () => {
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