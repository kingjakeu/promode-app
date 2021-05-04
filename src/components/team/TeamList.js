import React, { useEffect, useState } from 'react'
import axios from 'axios';

function TeamList(){

  const [teamInfoList, setTeamInfoList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =  useState(null);

  useEffect(() => {
    const fetchTeamInfoList = async () => {
      try{
        setError(null);
        setTeamInfoList(null);
        setLoading(true);
      
        const response = await axios.get(
          '/team', {
            params : {
              tournamentId : "105522984810490982"
            }
          }
        );
        setTeamInfoList(response.data);
      } catch (e) {
        setError(e);
      }
    }
    fetchTeamInfoList();
  }, []);

  if(error) console.log(error);
  if(!teamInfoList) return null;

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
            {teamInfoList.map(teamInfo => (
              <Team teamInfo={teamInfo} key={teamInfo.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Team({teamInfo}){
  return(
    <tr>
      <td className="list-item-content list-item-content-stat">
        <h4>{teamInfo.rank}</h4>
      </td>
      <td className="list-item-content">
        <div className="list-item-team">
          <img src={teamInfo.imgUrl} alt=""/>
          <span>{teamInfo.code}</span>
        </div>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{teamInfo.totalMatch}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{teamInfo.matchWin}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{teamInfo.matchLoss}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{teamInfo.score}</span>
      </td>
      <td className="list-item-content list-item-content-stat">
        <span>{teamInfo.matchWinRate}%</span>
      </td>
    </tr>
  );
}

export default TeamList;