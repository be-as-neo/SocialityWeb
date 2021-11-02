import s from './MyPosts.module.css'
import Post from './Post/Post';
import Profile from '../Profile';
import React from 'react';



const MyPosts = (props) => {
  // let postData = [
  //   {id: 1, message: 'Love you!!!', likesCount: 16},
  //   {id: 2, message: 'You my best friend!', likesCount: 17},
  //   {id: 3, message: 'Hello, how are you?', likesCount: 87}
  // ]

  let postElements = 
    props.postData.map( p => <Post messege = {p.message} likesCount = {p.likesCount} avatar = {p.avatar}/>);
  
  let newPostElement = React.createRef();

  let addPost = () =>{
    props.addPost()
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
      {/* <Post messege = {postData[0].message} like = {postData[0].likesCount} />
      <Post messege = {postData[1].message} like = {postData[1].likesCount} />
      <Post messege = {postData[2].message} like = {postData[2].likesCount} /> */}
    </div>
    </div>
  )
}

export default MyPosts;

// img = 'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'
// img = 'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'
// img = 'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'
