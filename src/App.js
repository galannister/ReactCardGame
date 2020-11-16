import React from "react";

import Startpage from './components/Startpage';
import Game from './components/Game';
import HowtoPlay from './components/HowtoPlay';
import Cards from './components/Cards';
import {BrowserRouter as Routing, Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css' 


class App extends React.Component {
  
  render() {
    
    return (
     
      <Routing>
        <Switch>
          <Route exact path='/'  component={Startpage}/>
          <Route exact path='/HowtoPlay' component={HowtoPlay}/>
          <Route exact path='/Game' component={Game}/>
        </Switch>
      </Routing>

    );
  }
  
}





export default App;
