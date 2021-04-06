import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import Match from './Match'

function App(){
  return (
    <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/match" component={Match}/>
    </div>
  );
}

export default App;
