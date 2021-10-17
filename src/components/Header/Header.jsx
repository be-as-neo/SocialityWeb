import classes from'./Header.module.css'
const Header = () =>{
    return(
        <header className = {classes.header}>
        <img src ='https://avatanplus.com/files/resources/original/5ae0a6e809728162fd8bfa67.png' className = "logo"></img>
        <div className = 'title-main'>It`s just circle</div>
      </header>
    )
}
export default Header