import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {  
  return (
    <StoreContext.Consumer> 
      { store => {
        let state = store.getState();
        let addPost = () =>{
        store.dispatch( addPostActionCreator())
        }

        let onPostChange = (text) =>{
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action)
        }
        return <MyPosts 
          updateNewPostText = {onPostChange} 
          addPost = {addPost} 
          postData = {state.profilePage.postData} 
          newPostText = {state.profilePage.newPostText}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;

// img = 'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'
// img = 'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'
// img = 'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'
