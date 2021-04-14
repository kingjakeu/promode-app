import './App.css';
import React, {useState} from 'react';
import MatchSchedule from './components/MatchSchedule'
import MainEvent from './components/MainEvent'
import WeekMvp from './components/best-of-Week/WeekMvp'
import WeekPlayer from './components/best-of-Week/WeekPlayer'
import WeekChamp from './components/best-of-Week/WeekChamp'
import Standing from './components/Standing'

function Home(){
  const[main_event, setMainEvent] = useState([
    {
      title: "Week 10", eventDate: "수요일 3월 31일", subTitle: "DWG KIA vs T1", blueImg: "img/dwg.png", redImg: "img/t1.png"
    }
  ]); 
  const[match_schedule, setMatchSchedule] = useState( [
    {
      title: "수요일 3.31",
      matches: [
        {blue: "DWG", red: "T1", result: "17:00", blueImg: "img/icon/team/dwg-kia.png", redImg: "img/t1_small.png"},
        {blue: "HLE", red: "T1", result: "20:00", blueImg: "img/icon/team/dwg-kia.png", redImg: "img/t1_small.png"},
      ]
    }
  ]);
  const[finished_schedule, setFinishedSchedule] = useState([
    {
      title: "지난 경기",
      matches: [
        {blue: "DWG", red: "T1", result: "2 : 0", blueImg: "img/icon/team/dwg-kia.png", redImg: "img/t1_small.png"},
        {blue: "HLE", red: "T1", result: "2 : 0", blueImg: "img/icon/team/dwg-kia.png", redImg: "img/t1_small.png"},
      ]
    }
  ]);
  const[week_mvp, setWeekMvp] = useState({
    player: {
      summonerName: "Chovy",
      teamName: "한화 생명 eSports",
      role: "MID",
      roleIcon: "img/mid-icon.png",
      playerImgUrl: "img/chovy.png"
    },
    stats: [
      {title: "KDA", value: "2.0"},
      {title: "분당 데미지 (DPM)", value: "490"},
      {title: "팀 내 데미지 비중 (DMG)", value: "25.5%"},
      {title: "킬 관여율 (KP)", value: "57.5%"},
      {title: "15분 골드 차이 (GD 15)", value: "+362"}
    ]
  });
  const[week_player, setWeekPlayer] = useState([
    {summonerName: "Chovy", teamName: "HLE", role: "MID", roleIcon:"img/mid-icon.png", playerImg: "img/chovy.png"},
    {summonerName: "Chovy", teamName: "HLE", role: "MID", roleIcon:"img/mid-icon.png", playerImg: "img/chovy.png"},
    {summonerName: "Chovy", teamName: "HLE", role: "MID", roleIcon:"img/mid-icon.png", playerImg: "img/chovy.png"},
    {summonerName: "Chovy", teamName: "HLE", role: "MID", roleIcon:"img/mid-icon.png", playerImg: "img/chovy.png"},
    {summonerName: "Chovy", teamName: "HLE", role: "MID", roleIcon:"img/mid-icon.png", playerImg: "img/chovy.png"}
  ]);
  const[week_champs, setWeekChamps] = useState([
    {
      champName: "나르", champRole: "TOP", champRoleIcon: "img/mid-icon.png", champImg: "img/gnar.jpeg",
      champStats: [
        {title: "PICK", value: "49.8%"},
        {title: "BAN", value: "33.4%"},
        {title: "WIN", value: "52.1%"}
      ]
    },
    {
      champName: "나르", champRole: "TOP", champRoleIcon: "img/mid-icon.png", champImg: "img/gnar.jpeg",
      champStats: [
        {title: "PICK", value: "49.8%"},
        {title: "BAN", value: "33.4%"},
        {title: "WIN", value: "52.1%"}
      ]
    },
    {
      champName: "나르", champRole: "TOP", champRoleIcon: "img/mid-icon.png", champImg: "img/gnar.jpeg",
      champStats: [
        {title: "PICK", value: "49.8%"},
        {title: "BAN", value: "33.4%"},
        {title: "WIN", value: "52.1%"}
      ]
    },
    {
      champName: "나르", champRole: "TOP", champRoleIcon: "img/mid-icon.png", champImg: "img/gnar.jpeg",
      champStats: [
        {title: "PICK", value: "49.8%"},
        {title: "BAN", value: "33.4%"},
        {title: "WIN", value: "52.1%"}
      ]
    },
    {
      champName: "나르", champRole: "TOP", champRoleIcon: "img/mid-icon.png", champImg: "img/gnar.jpeg",
      champStats: [
        {title: "PICK", value: "49.8%"},
        {title: "BAN", value: "33.4%"},
        {title: "WIN", value: "52.1%"}
      ]
    }
  ]);
  const[standing, setStanding] = useState([
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
    {pos: "1", teamName: "DWG", teamIcon: "img/icon/team/dwg-kia.png", win: 18, lost: 2, point: "+20"},
  ]);
  return(
    <div className="App">
      <div class="content-wrapper w100">
        <MainEvent
          mainTopic={main_event}
        ></MainEvent>
        <MatchSchedule
          matchSchedule={match_schedule}
          finishedSchedule={finished_schedule}
        ></MatchSchedule>
      </div>
      <div class="content-wrapper w100">
        <div class="of-the-week w70">
          <WeekMvp weekMvpInfo={week_mvp}></WeekMvp>
          <WeekPlayer weekPlayerInfo={week_player}></WeekPlayer>
          <WeekChamp weekChampInfo={week_champs}></WeekChamp>
        </div>
        <div class="side-info w30">
          <Standing standing={standing}></Standing>
        </div>
      </div>
    </div>
  );
}

export default Home;
