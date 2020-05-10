import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'
//components
import Detail from './pages/Detail'
import Home from './pages/Home'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/detail/:movieId' component={Detail}/>
      </Switch>
    </div>
  );
}

export default App;
