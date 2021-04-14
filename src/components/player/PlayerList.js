import React from 'react'

function PlayerList(){
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
              <Player/>
              <Player/>
            </tbody>
          </table>
        </div>
      </div>
  );
}

function Player(){
  return(
    <tr>
      <td className="list-item-content list-item-content-stat">
        <h4>1</h4>
      </td>
      <td className="list-item-content">
        <div className="list-item-player">
          <img src="./img/chovy.png" alt=""/>
          <span>Chovy</span>
        </div>
      </td>
      <td className="list-item-content">
        <div className="list-item-team">
          <img src="./img/dwg_small.png" alt=""/>
          <span>DWG</span>
        </div>
      </td>
      
      <td className="list-item-content">
        <div className="list-item-pos">
          <img src="./img/mid-icon.png" alt=""/>
          <span>MID</span>
        </div>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>3.21</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>3.21</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>3.21</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>3.21</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>52%</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>8</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>2</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>80%</span>
      </td>
    </tr>
  );
}
export default PlayerList