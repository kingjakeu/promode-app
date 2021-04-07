import React, { useEffect, useState } from 'react';

function Match(){
  return(
    <div className="match-content">
      <div className="match-date-picker-wrapper shadow">
        <button className="match-month-pick-btn">
          <span>4월</span>
        </button>
        <DatePicker selectedDate={new Date()}/>
      </div>
      <div className="match-schedule-content">
        <ul>
          <MatchList/>
          <MatchList/>
          <MatchList/>
          <MatchList/>
          <MatchList/>
          <MatchList/>
        </ul>
      </div>
      
    </div>
  );
}
function MatchList(){
  return(
    <li className="match-schedule-content-li">
      <div className="match-list-item shadow">
        <MatchSummary/>
        <div className="match-detail">
          <MatchGameList/>
          {/* <KeyPlayer/> */}
        </div>
      </div>
    </li>
  );
}
function MatchGameList(){
  return(
    <ul className="match-game-detail-ul">
      <MatchGameDetail/>
      <MatchGameDetail/>
      <MatchGameDetail/>
    </ul>
  );
}
function MatchGameDetail(){
  return(
    <li className="match-game-detail-li">
      <div>
        <div>
          <img className="match-game-win-img" src="img/dwg.png" alt="win team img"/>
        </div>
      </div>
    </li>
  );
}
function KeyPlayer({KeyPlayerInfo}){
  return(
    <div className="match-key-player-wrapper">
      <h5>Key Players</h5>
      <table className="match-key-player">
        <thead className="match-key-player-stats-title">
          <tr>
            <th></th>
            <th>지</th>
            <th>표</th>
            <th>입</th>
            <th>니</th>
            <th>다</th>
          </tr>
        </thead>
        <tbody>
          <KeyPlayerDetail/>
          <KeyPlayerDetail/>
        </tbody>
      </table>
    </div>
  );
}

function KeyPlayerDetail({KeyPlayerDetail}){
  return(
    <tr className="match-key-player-stats">
      <td className="match-key-player-profile">
        <div className="match-key-player-img-wrapper"> 
          <img src="./img/chovy.png"/>
        </div>
        <span className="match-key-player-name">Chovy</span>
        <span className="match-key-player-team">HLE</span>            
      </td>
      <td className="match-key-player-stats-desc">
        2.34
      </td>
      <td className="match-key-player-stats-desc">
        2.34
      </td>
      <td className="match-key-player-stats-desc">
        2.34
      </td>
      <td className="match-key-player-stats-desc">
        2.34
      </td>
      <td className="match-key-player-stats-desc">
        2.34
      </td>
    </tr>
  );
}

function MatchSummary(){
  return (
    <div className="match-summary right-border-grey">
      <div className="match-box-score">
        <div className="match-box-score-team">
          <img className="match-box-score-team-img" src="/img/dwg.png" alt="team icon"/>
          <div className="match-box-score-team-rank">
            <span>DWG</span>
            <span>10-4</span>
          </div>
        </div>
        <div className="match-box-score-result">
          <span>17:00</span>
        </div>
        <div className="match-box-score-team">
          <img className="match-box-score-team-img" src="/img/t1.png" alt="team icon"/>
          <div className="match-box-score-team-rank">
            <span>T1</span>
            <span>10-4</span>
          </div>
        </div>
      </div>
      <div className="match-btn-wrapper">
        <button className="match-summary-btn right-border-grey">PREVIEW</button>
        <button className="match-summary-btn">WATCH</button>
      </div>
    </div>
  );
}

function DatePicker({selectedDate}){
  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
 
  var startDate = new Date(selectedDate.setDate(selectedDate.getDate()-4));

  const dateList = [];
  for(var i=0; i < 7; i++){
    startDate.setDate(startDate.getDate() + 1);
    dateList.push({
      day : weekday[startDate.getDay()],
      date : startDate.getDate()
    });
  }

  return(
    <div className="match-date-pick-wrapper">
      <button className="match-date-move-btn"> - </button>
      {dateList.map(dateInfo => (
        <DatePickElement dateInfo={dateInfo} key={dateInfo.date}/>
      ))}
     
      <button className="match-date-move-btn"> + </button>
    </div>
  );
}

function DatePickElement({dateInfo}){
  return (
    <button className="match-date-pick-btn">
      <span className="match-date-pick-weekday">{dateInfo.day}</span>
      <span className="match-date-pick-date">{dateInfo.date}</span>
    </button>
  );
}
export default Match;