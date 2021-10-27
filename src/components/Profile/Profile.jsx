import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import reactDom from 'react-dom';

const Profile = (props) => {
    

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postData = {props.state.postData} addPost = {props.addPost}/>
    </div>

  )
}


export default Profile