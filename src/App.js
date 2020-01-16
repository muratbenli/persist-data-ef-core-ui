import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import { Order } from './components/Orders';

const App = () => {
  return(
    <Router>
      <Header>
      <Switch>
        {/* <Route exact path="/" component={Header} />  */}
        <Route exact path="/order" component={Order} />  
      </Switch>      
      </Header>
    </Router>
  );
}

export default App;
