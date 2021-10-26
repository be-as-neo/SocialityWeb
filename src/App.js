
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

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



function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className = 'app-wrapper-content'>
          {/* <Route path='/profile' component = {Profile}/>
          <Route path='/dialogs' component = {Dialogs}/> */}
          <Route path='/dialogs' render = { () => <Dialogs dialogsData = {dialogsData } messagesData = {messagesData}/> }/>
          <Route path='/profile' render = { () => <Profile postData = {props.postData} /> } />
          <Route path='/news' component = {News}/>
          <Route path ='/music' component = {Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
