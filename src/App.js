import React from 'react'
import {Route, Router} from 'react-router-dom'
import Home from './Home'
import Match from './Match'
import Player from './components/player/Player'
import PlayerList from './components/player/PlayerList'

import {Radar} from 'react-chartjs-2'
function App(){
  return (
    <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/match" component={Match}/>
      <Route path="/player" component={PlayerList}/>
    </div>
  );
}

export default App;
