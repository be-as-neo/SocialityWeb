import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {addNewMessage, addPost, updateNewMessage, updateNewPostText} from './redux/state'

// addPost('SumuraiJs');
export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} addNewMessage = {addNewMessage} updateNewMessage = {updateNewMessage}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reportWebVitals();