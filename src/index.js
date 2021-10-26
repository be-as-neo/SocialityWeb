import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, message: 'Love you!!!', likesCount: 16},
  {id: 2, message: 'You my best friend!', likesCount: 17},
  {id: 3, message: 'Hello, how are you?', likesCount: 87}
]

let dialogsData = [
  {id: 1, name: 'Ivan'},
  {id: 2, name: 'Ekaterina'},
  {id: 3, name: 'Danil'},
  {id: 4, name: 'Vitalya'},
  {id: 5, name: 'Misha'},
]

let messagesData = [
  {id: 1, message: 'hi'},
  {id: 2, message: 'is'},
  {id: 3, message: 'yo'},
  {id: 4, message: 'name'},
  {id: 5, message: 'Hi'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
