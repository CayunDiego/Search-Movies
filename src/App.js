import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'
//components
import Detail from './pages/Detail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/detail/:movieId' component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
