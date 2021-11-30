import React, {useEffect} from 'react';
import Header from './components/header/Header';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Email from './components/email/Email';
import EmailList from './components/emailList/EmailList';
import SendMail from './components/sendmail/SendMail';
import {useSelector, useDispatch} from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {selectUser, login} from './features/userSlice';
import Login from './components/login/Login';
import {auth} from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) :( 

        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Email />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
        )
      }
    </Router>
  );
}

export default App;
