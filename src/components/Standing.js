import React from 'react'

function Standing(props){
  let teamInfos = props.standing;

  return(
    <div class="side-info-wrapper">
      <div class="point-bar"> </div>
      <div class="side-content-wrapper h100 shadow">
        <div class="side-info-title">
          <h5>현재 순위</h5>
        </div>
      </div>
      <div class="side-info-body">
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>팀</th>
            <th>W</th>
            <th>L</th>
            <th>득실</th>
          </tr>
        </thead>
        <tbody>
          {getTeamList(teamInfos)}
        </tbody>
      </table>
    </div>
    </div>
  );
}

function getTeamList(teamInfos){
  let teamList = []
  for(var i=0; i < teamInfos.length; i++){
    teamList.push(
      <tr>
        <td class="standing-pos">{teamInfos[i].pos}</td>
        <td class="standing-team">
          <img class="team-badge-logo" src={teamInfos[i].teamIcon}/>
          <span>{teamInfos[i].teamName}</span>
        </td>
        <td>{teamInfos[i].win}</td>
        <td>{teamInfos[i].lost}</td>
        <td>{teamInfos[i].point}</td>
      </tr>
    );
  }
  return teamList
}

export default Standing;