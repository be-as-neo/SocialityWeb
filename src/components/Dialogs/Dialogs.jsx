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
const Dialogs = () => {
    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                <DialogItem name = "Ivan" id = "1"/>
                <DialogItem name = "Ekaterina" id = "2"/>
                <DialogItem name = "Danil" id = "3"/>
                <DialogItem name = "Oleg" id = "4"/>
                <DialogItem name = "Misha" id = "5"/>
            </div>
            <div className = {s.messages}>
                <Messege message = "hi"/>
                <Messege message = "is"/>
                <Messege message = "yo"/>
                <Messege message = "My Name is"/>
                <Messege message = "Hello"/>
            </div>
        </div>
    )
}

export default Dialogs