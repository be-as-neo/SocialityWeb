import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

// addPost('SumuraiJs');
let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContext.Provider value = {store}>
      <App />
    </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
});
{/* <App state = {state} dispatch = {store.dispatch.bind(store)} 
store = {store}/> */}