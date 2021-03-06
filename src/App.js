import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';






const App = (props) => {

  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <div className='app-wrapper-content'>

     <Route path='/dialogs' 
                    render={ () => <DialogsContainer /> }/>
     <Route path='/profile'
                     render={ () => <Profile  /> }/>
     <Route path='/users'
                     render={ () => <UsersContainer /> }/>
     <Route path='/news' render={ () => <News /> }/>
     <Route path='/music' render={() => <Music />}/>
     <Route path='/setting' render={() => <Setting />}/>


     </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
