import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PlayerList(){

  const [playerInfoList, setPlayerInfoList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =  useState(null);

  useEffect(() => {
    const fetchPlayerList = async () => {
      try{
        setError(null);
        setPlayerInfoList(null);
        setLoading(true);
      
        const response = await axios.get(
          '/player/summary', {
            // params : {}
          }
        );
        setPlayerInfoList(response.data);
      } catch (e) {
        setError(e);
      }
    }
    fetchPlayerList();
  }, []);

  if(error) console.log(error);
  if(!playerInfoList) return null;

  return(
    <div className="list-content-wrapper">

        <h1>플레이어 목록</h1>
        <ul>
          <li className="list-tab-selected">
            <a>ALL</a>
          </li>
          <li className="list-tab-unselected">
            <a>TOP</a>
          </li>    
          <li className="list-tab-unselected">
            <a>JUG</a>
          </li>
          <li className="list-tab-unselected">
            <a>MID</a>
          </li>        
          <li className="list-tab-unselected">
            <a>BOT</a>
          </li>        
          <li className="list-tab-unselected">
            <a>SUP</a>
          </li>
        </ul>
        <div>
          <table className="list-wrapper">
            <thead>
              <tr>
                <th className="list-item-title list-item-content-stat">순위</th>
                <th className="list-item-title">선수</th>
                <th className="list-item-title">팀</th>
                <th className="list-item-title">포지션</th>
                <th className="list-item-title list-item-content-stat">KDA</th>
                <th className="list-item-title list-item-content-stat">킬</th>
                <th className="list-item-title list-item-content-stat">데스</th>
                <th className="list-item-title list-item-content-stat">어시스트</th>
                <th className="list-item-title list-item-content-stat">킬 관여</th>
                <th className="list-item-title list-item-content-stat">승</th>
                <th className="list-item-title list-item-content-stat">패</th>
                <th className="list-item-title list-item-content-stat">승률</th>
              </tr>
            </thead>
            <tbody>
              {playerInfoList.map(playerInfo => (
                <Player playerInfo={playerInfo} key={playerInfo.id}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

function Player({playerInfo}){
  return(
    <tr>
      <td className="list-item-content list-item-content-stat">
        <h4>1</h4>
      </td>
      <td className="list-item-content">
        <div className="list-item-player">
          <img src="./img/chovy.png" alt=""/>
          <span>{playerInfo.summonerName}</span>
        </div>
      </td>
      <td className="list-item-content">
        <div className="list-item-team">
          <img src="./img/icon/team/dwg-kia.png" alt=""/>
          <span>DWG</span>
        </div>
      </td>
      
      <td className="list-item-content">
        <div className="list-item-pos">
          <img src="./img/mid-icon.png" alt=""/>
          <span>{playerInfo.role}</span>
        </div>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.kda}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.kill}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.death}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.assist}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>52%</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.win}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.loss}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{playerInfo.winRate}%</span>
      </td>
    </tr>
  );
}
export default PlayerList