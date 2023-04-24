
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once app component is loaded

    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);

      if (authUser) {
        //user is already logged in / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is not logged in / is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (
    //BEM
  <Router>
    <div className="App">


      <Switch>
       <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
         <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
         </Route>
      </Switch>
    </div>
 </Router>
  );
}

export default App;
