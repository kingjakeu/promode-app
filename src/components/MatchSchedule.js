import React from 'react'

function MatchSchedule(props){
  const upcommingStyle = "schedule-table-time";
  const finishedStyle = "schedule-table-result";
  return(
    <div class="side-info w30">
      <div class="side-info-wrapper">
        <div class="point-bar"> </div>
        <div class="side-content-wrapper h100 shadow"> 
        <div class="side-info-title">
          <h5>경기 일정</h5>
        </div>
        {getMatchSchedule(props.matchSchedule, upcommingStyle)}
        {getMatchSchedule(props.finishedSchedule, finishedStyle)}
      </div>
      </div>
    </div>
  );
}

function getMatchSchedule(schedule, resultStyle){
  let length = schedule.length;
  let scheduleList = [];
  for(var i=0; i < length; i++){
    var match = schedule[0].matches;
    var matchList = [];
    for(var j=0; j < match.length; j++){
      matchList.push(
        <div class="schedule-table">
          <div class="schedule-table-element">
            <span class="schedule-table-team-name text-right">{match[j].blue}</span>
            <span><img src={match[j].blueImg}/></span>
            <span class={resultStyle}>{match[j].result}</span>
            <span><img src={match[j].redImg}/></span>
            <span class="schedule-table-team-name text-left">{match[j].red}</span>
          </div>
        </div>
      );
    }
    scheduleList.push(
      <div class="side-info-body">
        <div class="schedule-table-title">
          <h5>{schedule[i].title}</h5>
        </div>
        {matchList}
      </div>
    );
  }
  return scheduleList;
}
export default MatchSchedule;
