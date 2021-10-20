import s from'./Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className ={s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className = {s.dialog}>
                    Ekaterina
                </div>
                <div className = {s.dialog}>
                    Denis
                </div>
                <div className = {s.dialog}>
                    Vitaliy
                </div>
                <div className = {s.dialog}>
                    Misha
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