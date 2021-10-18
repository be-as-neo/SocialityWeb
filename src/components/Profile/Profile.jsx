import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <div className = {s.content}>
      <div className = {s.img}>
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