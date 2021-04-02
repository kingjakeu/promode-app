import React from 'react'

function WeekPlayer(props){
  return(
    <div class="best-of-week">
      <div class="of-the-week-wrapper shadow">
        <div class="of-the-week-title-wrapper">
          <h5>
            <span class="of-the-week-color-span-small">Best 5</span>
            <span class="of-the-week-unimportant-span"> of the Week</span>
          </h5>
        </div>
        {getPlayerList(props.weekPlayerInfo)}
      </div>
    </div>
  );
}

function getPlayerList(playerInfos){
  let playerList = []
  
  for(var i=0; i < playerInfos.length; i++){
    playerList.push(
      <li class="flex-table-cell-no-border">
        <div class="of-the-week-best-img-wrapper">
          <img class = "of-the-week-best-img" src={playerInfos[i].playerImg}/>
        </div>
        <div class="point-bar-small"></div>
        <div class="of-the-week-best-desc shadow">                    
          <img class="pos-icon" src={playerInfos[i].roleIcon}/>
          <div class="of-the-week-unimportant-span-small">{playerInfos[i].summonerName}</div>
          <div class="of-the-week-unimportant-span-small">{playerInfos[i].teamName}</div>
        </div>
      </li>
    );
  }

  return(
    <div class="of-the-week-content">
      <ul>
        {playerList}
      </ul>
    </div>
  );
}

export default WeekPlayer;
