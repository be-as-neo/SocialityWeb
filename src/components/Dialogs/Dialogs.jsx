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
    {id: 5, name: 'Misha'}
]

let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'is'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'name'},
    {id: 5, message: 'Hi'}
]

const Dialogs = () => {
    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
                <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>
            </div>
            <div className = {s.messages}>
                <Messege message = {messagesData[0].message} id = {messagesData[0].id}/>
                <Messege message = {messagesData[1].message} id = {messagesData[1].id}/>
                <Messege message = {messagesData[2].message} id = {messagesData[2].id}/>
                <Messege message = {messagesData[3].message} id = {messagesData[3].id}/>
                <Messege message = {messagesData[4].message} id = {messagesData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs