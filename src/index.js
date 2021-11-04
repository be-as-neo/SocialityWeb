import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// addPost('SumuraiJs');
let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state} addPost = {store.addPost.bind(store)} 
        updateNewPostText = {store.updateNewPostText.bind(store)} 
        addNewMessage = {store.addNewMessage.bind(store)} 
        updateNewMessage = {store.updateNewMessage.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
