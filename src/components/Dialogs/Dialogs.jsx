import { NavLink } from 'react-router-dom'
import s from'./Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog + ' ' + s.active}>
                   <NavLink to = "/dialogs/1" activeClassName={s.activeLink}>Ivan</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = "/dialogs/2" activeClassName={s.activeLink}>Ekaterina</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = "/dialogs/3" activeClassName={s.activeLink}> Denis</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = "/dialogs/4" activeClassName={s.activeLink}>Oleg</NavLink>
                </div>
                <div className = {s.dialog}>
                    <NavLink to = "/dialogs/5" activeClassName={s.activeLink}>  Misha</NavLink>
                </div>
            </div>
            <div className = {s.messages}>
                    <div className={s.messege}>hi</div>
                    <div className={s.message}>How is youre </div>
                    <div className={s.message}>yo</div>
            </div>
        </div>
    )
}

export default Dialogs