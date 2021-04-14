import React from 'react'

function TeamList(){
  return(
    <div className="list-content-wrapper">
      <h1>LCK 2021 Split 1</h1>
      <div>
        <table className="list-wrapper">
          <thead>
            <tr>
              <th className="list-item-title list-item-content-stat">순위</th>
              <th className="list-item-title">팀</th>
              <th className="list-item-title list-item-content-stat">경기</th>
              <th className="list-item-title list-item-content-stat">승</th>
              <th className="list-item-title list-item-content-stat">패</th>
              <th className="list-item-title list-item-content-stat">득실</th>
              <th className="list-item-title list-item-content-stat">승률</th>
            </tr>
          </thead>
          <tbody>
            <Team/>
            <Team/>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Team(){
  return(
    <tr>
      <td className="list-item-content list-item-content-stat">
        <h4>1</h4>
      </td>
      <td className="list-item-content">
        <div className="list-item-team">
          <img src="./img/dwg_small.png" alt=""/>
          <span>DWG</span>
        </div>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>10</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>8</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>2</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>+10</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>80.0%</span>
      </td>
    </tr>
  );
}

export default TeamList;