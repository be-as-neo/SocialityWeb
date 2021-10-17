import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://pbs.twimg.com/profile_banners/1173848757470785536/1569306015/1500x500'></img>
      </div>
      <div>
        ava
      </div>
      <MyPosts />
    </div>

  )
}

export default Profile