import React, { useEffect, useState } from 'react'
import axios from 'axios';

function WeekPlayerList(){
  const [weekPlayerList, setWeekPlayerList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =  useState(null);

  useEffect(() => {
    const fetchWeekPlayerList = async () => {
      try{
        setError(null);
        setWeekPlayerList(null);
        setLoading(true);
      
        const response = await axios.get(
          '/player/best', {
            params : {
              tournamentId : "105522984810490982",
              weekBlock: "WEEK9"
            }
          }
        );
        setWeekPlayerList(response.data);
      } catch (e) {
        setError(e);
      }
    }
    fetchWeekPlayerList();
  }, []);

  if(error) console.log(error);
  if(!weekPlayerList) return null;

  return(
    <div class="best-of-week">
      <div class="of-the-week-wrapper shadow">
        <div class="of-the-week-title-wrapper">
          <h5>
            <span class="of-the-week-color-span-small">Best 5</span>
            <span class="of-the-week-unimportant-span"> of the Week</span>
          </h5>
        </div>
        <div class="of-the-week-content">
          <ul>
            {weekPlayerList.map(playerInfo => (
              <WeekPlayer playerInfo={playerInfo} key={playerInfo.id}/>
              ))}
          </ul>
        </div>
      </div>
    </div>

    
  ); 
}

function WeekPlayer({playerInfo}){
  return(
    <li class="flex-table-cell-no-border">
      <div class="of-the-week-best-img-wrapper">
        <img class = "of-the-week-best-img"  src="./img/chovy.png" alt=""/>
      </div>
      <div class="point-bar-small"></div>
      <div class="of-the-week-best-desc shadow">                    
        <img class="pos-icon" src="./img/mid-icon.png" alt=""/>
        <div class="of-the-week-unimportant-span-small">{playerInfo.summonerName}</div>
        <div class="of-the-week-unimportant-span-small">{playerInfo.summonerName}</div>
      </div>
    </li>
  );
}

export default WeekPlayerList;
