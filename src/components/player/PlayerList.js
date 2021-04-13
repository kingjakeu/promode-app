import React from 'react'

function PlayerList(){
  return(
    <div>
      <h1>플레이어 목록</h1>
      <div className="list-content-wrapper">
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
                <th className="list-item-title">순위</th>
                <th className="list-item-title">선수</th>
                <th className="list-item-title">팀</th>
                <th className="list-item-title">포지션</th>
                <th className="list-item-title">평균 KDA</th>
              </tr>
            </thead>
            <tbody>
              <Player/>
              <Player/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Player(){
  return(
    <tr>
      <td className="list-item-content">
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
      <td className="list-item-content">
        <span>3.21</span>
      </td>
    </tr>
  );
}
export default PlayerList