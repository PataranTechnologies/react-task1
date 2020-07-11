import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

function App() {
  const [authMode, setAuthMode] = useState({login: false, signup: true});

  const authSwitchHandler = () => {
    setAuthMode({login: !authMode.login, signup: !authMode.signup});
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Home authMode={authMode.signup} authSwitch={authSwitchHandler} token={localStorage.getItem("token")}/>
      </Route>
      <Route path="/allposts">
        <Posts token={localStorage.getItem("token")}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    );
}

export default App;
