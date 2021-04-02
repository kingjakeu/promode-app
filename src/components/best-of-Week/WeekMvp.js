import React from 'react';

function PlayOfWeek(props){
  let player = props.weekMvpInfo.player;
  let stats = props.weekMvpInfo.stats;
  return(
    <div class="best-of-week">
      <div class="of-the-week-wrapper shadow">
        {getPlayer(player)}
        {getStats(stats)}
      </div>
    </div>
  );
}

function getPlayer(player){
  return (
    <div class="of-the-week-title-wrapper">
      <div class="of-the-week-title">
        <span class="of-the-week-color-span">Player</span>
        <span class="of-the-week-unimportant-span">of the</span>
        <span class="of-the-week-color-span">Week</span>
      </div>
      <div class="of-the-week-img-wrapper">
        <img class = "of-the-week-img" src={player.playerImgUrl}/>
      </div>
      <div class="of-the-week-desc">
        <img class="pos-icon" src={player.roleIcon}/>
        <span class="of-the-week-unimportant-span">{player.role}<br/></span>
        <span class="of-the-week-color-span">{player.summonerName}<br/></span>
        <span class="of-the-week-unimportant-span-small">{player.teamName}</span>
      </div>
    </div>
  );
}

function getStats(stats){
  let statList = []
  for(var i=0; i < stats.length; i++){
    statList.push(
      <li class="flex-table-cell">
        <div class="flex-table-cell-title">{stats[i].title}</div>
        <div class="flex-table-cell-desc">{stats[i].value}</div>
      </li>
    );
  }
  return (
    <div class="of-the-week-content">
      <ul>
        {statList}
      </ul>
    </div>
  );
}

export default PlayOfWeek;