import React from 'react'
import { Radar } from 'react-chartjs-2'
function Player(){
  return(
    <div className="player-content-wrapper">
      <PlayerProfile/>
      <PlayerStat/>
    </div>
  );
}
function PlayerProfile(){
  return(
    <div className="player-profile-wrapper">
      <h3>Casdasdasdasdhovy</h3>
      <div className="player-profile-team-img-wrapper">
        <img src="./img/dwg_small.png" alt=""/>
        <span>DWG KIA</span>
      </div>
      <div className="player-profile-desc ">
        <span>정지훈</span>
        <span>2001년 3월 3일(20세)</span>
        <span>대한민국</span>
      </div>
  </div>
  );
}

function PlayerStat(){
  return(
    <div className="player-stat-wrapper">
      <div className="player-stat-table-wrapper">
        <div className="player-profile-img-wrapper">
          <div className="player-profile-img-pos">
            <img src="./img/mid-icon.png" alt=""/>
          </div>
          <div className="player-profile-img-play">
            <img src="./img/chovy.png" alt=""/> 
          </div>
        </div>
        <div className="point-bar minus-top-margin"></div>
        <PlayerStatTable/>
        <PlayerMostPicks/>
      </div>
      <PlayerStatGraph/>
    </div>
  );
}

function PlayerStatTable(){
  return(
    <div className="player-stat-table shadow">
      <table className="player-stat-table-main">
        <tr>
          <td>KDA</td>
          <td>2.0</td>
          <td>1st</td>
        </tr>
        <tr>
          <td>분당 데미지(DPM)</td>
          <td>490</td>
          <td>2nd</td>
        </tr>
        <tr>
          <td>팀 내 데미지 비중(DMG%)</td>
          <td>25.5%</td>
          <td>2nd</td>
        </tr>
        <tr>
          <td>킬 관여율(KP)</td>
          <td>57.7%</td>
          <td>1st</td>
        </tr>
        <tr>
          <td>15분 골드 차이(GD@15)</td>
          <td>+362</td>
          <td>2nd</td>
        </tr>
        <tr>
          <td>정글러 관여율(JP)</td>
          <td>10.8%</td>
          <td>2nd</td>
        </tr>
      </table>
      <table className="player-stat-table-sub">
        <tr>
          <td>총 경기 수</td>
          <td>10</td>
        </tr>
        <tr>
          <td>승리</td>
          <td>8</td>
        </tr>
        <tr>
          <td>패배</td>
          <td>2</td>
        </tr>
        <tr>
          <td>승률</td>
          <td>80.0%</td>
        </tr>
      </table>
    </div>
  );
}
function PlayerMostPicks(){
  return(
    <div className="player-most-pick shadow">
      <h4>Most Pick</h4>
      <div className="player-most-pick-champ-list">
        <ul>
          <li>
            <div className="player-most-pick-champ-wrapper">
              <div className="player-most-pick-champ-img-wrapper">
                <img src="./img/gnar.jpeg" alt=""/>
              </div>
              <span>나르</span>
              <span>10 게임</span>
              <span>59.8%</span>
            </div>
          </li>
          <li>
            <div className="player-most-pick-champ-wrapper">
              <div className="player-most-pick-champ-img-wrapper">
                <img src="./img/gnar.jpeg" alt=""/>
              </div>
              <span>나르</span>
              <span>10 게임</span>
              <span>59.8%</span>
            </div>
          </li>
          <li>
            <div className="player-most-pick-champ-wrapper">
              <div className="player-most-pick-champ-img-wrapper">
                <img src="./img/gnar.jpeg" alt=""/>
              </div>
              <span>나르</span>
              <span>10 게임</span>
              <span>59.8%</span>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
function PlayerStatGraph(){
  const data = {
    labels: [
      'KDA',
      'DPM',
      'DMG',
      'KP',
      '15@GD',
      'JP',
      'CP'
    ],
    datasets: [{
      label: 'Chovy',
      data: [1,2,3,4,5,2,2],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointRadius:0,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: '리그 평균',
      data: [3,3,3,3,3,3,3],
      fill: true,
      backgroundColor: 'rgba(221, 221, 221, 0.2)',
      borderColor: '#bbb',
      pointRadius:0,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  const options = {
    legend: {
      display: 'false'
    },
    scales:{
      ticks: {
        beginAtZero: true,
        max: 5,
        min: 0,
        stepSize: 1
      }
    }
  };

  return(
    <div className="player-stat-graph-wrapper">
      
      <Radar
        data={data}
        width={300}
        height={300}
        options={options}
      />
    </div>
  );
}
export default Player;