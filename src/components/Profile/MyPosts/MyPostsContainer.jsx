import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;

// img = 'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'
// img = 'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'
// img = 'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'
