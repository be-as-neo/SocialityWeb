
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import { Route } from 'react-router';
import { addPost } from './redux/state';
import DialogsContainer from './components/Dialogs/DialogsContainer';


 function App(props) {

  return (

      <div className='app-wrapper'>
        <Header />
        <Navbar state = {props.state.sideBarPage}/>
        <div className = 'app-wrapper-content'>
          {/* <Route path='/profile' component = {Profile}/>
          <Route path='/dialogs' component = {Dialogs}/> */}
          <Route path='/dialogs' render = { () => <DialogsContainer  store = {props.store}/> }/>
          <Route path='/profile' render = { () => <Profile store = {props.store} /> } />
          <Route path='/news' component = {News}/>
          <Route path ='/music' component = {Music}/>
        </div>
      </div>
  );
}

export default App;
