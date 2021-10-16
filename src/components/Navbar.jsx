import s from './Navbar.module.css';

// let classNav = {
//   'nav' : '.Navbar_nav__3DPEw',
//   'item' : 'Navbar_item__2t-MH'
// }

const Navbar = () => {
    return(
        <nav className = {s.nav}>
        <div>
          <a href = 's'  className = {s.item}>Profile</a>
        </div>
        <div>
          <a href = 's' class= {s.item}>Messages</a>
        </div>
        <div>
          <a href = 's'  className = {s.item}>News</a>
        </div>
        <div>
          <a href = 's'  className = {s.item}>Music</a>
        </div>
        <div>
          <a href = 's'  className = {s.item}>Videos</a>
        </div>
        <div>
          <a href = 's'  className = {s.item}>Settings</a>
        </div>

      </nav>
    )
}
export default Navbar