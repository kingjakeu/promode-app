import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Standing(props){
  const [standInfo, setStandInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStanding = async () => {
      try {
        setError(null);
        setStandInfo(null);
        setLoading(true);

        const response = await axios.get(
          '/standing', {
            params: {
              'tournamentId': '105522984810490982'
            }
          }
        );
        setStandInfo(response.data);
      }catch(e){
        setError(e);
      }
    }
    fetchStanding();
  }, []);
  
  if(error) console.log(error);
  if(!standInfo) return null;

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
          {standInfo.teamStandings.map(teamInfo => (
            <StandingTeam teamInfo={teamInfo} key={teamInfo.teamId}></StandingTeam>)
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}

function StandingTeam({teamInfo}){
  return (
    <tr>
      <td class="standing-pos">{teamInfo.rank}</td>
      <td class="standing-team">
        <img class="team-badge-logo" src={teamInfo.teamIcon}/>
        <span>{teamInfo.teamCode}</span>
      </td>
      <td>{teamInfo.matchWin}</td>
      <td>{teamInfo.matchLoss}</td>
      <td>{teamInfo.points}</td>
    </tr>
  );

}
export default Standing;