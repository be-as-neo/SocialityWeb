import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://images.wallpaperscraft.ru/image/single/zdaniia_arhitektura_chb_160924_2560x1024.jpg'></img>
      </div>
      <div>
        ava
      </div>
      <MyPosts />
    </div>

  )
}

export default Profile