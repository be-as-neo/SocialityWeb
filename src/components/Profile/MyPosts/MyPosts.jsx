import s from './MyPosts.module.css'
import Post from './Post/Post';
import Profile from '../Profile';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

  let postElements = 
    props.postData.map( p => <Post messege = {p.message} likesCount = {p.likesCount} avatar = {p.avatar}/>);
  
  let newPostElement = React.createRef();

  let addPost = () =>{
    props.dispatch( addPostActionCreator())
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
  }

  return (
    <div className = {s.MyPosts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
        </div>
        <div>
        <button onClick = {addPost}>Add Post</button>
        </div> 
      </div>
    <div className={s.posts}>
      {postElements}
    </div>
    </div>
  )
}

export default MyPosts;

// img = 'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'
// img = 'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'
// img = 'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'
