
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
        <Route path='/profile' component = {Profile}/>
        <Route path='/dialogs' component = {Dialogs}/>
        <Route path='/news' component = {News}/>
        <Route path ='/music' component = {Music}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
