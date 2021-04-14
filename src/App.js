import React from 'react'
import {Route, Router} from 'react-router-dom'
import Home from './Home'
import Match from './Match'
import Player from './components/player/Player'
import PlayerList from './components/player/PlayerList'
import TeamList from './components/team/TeamList'

function App(){
  return (
    <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/match" component={Match}/>
      <Route path="/player" component={PlayerList}/>
      <Route path="/team" component={TeamList}/>
    </div>
  );
}

export default App;
