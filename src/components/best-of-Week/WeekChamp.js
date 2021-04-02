import React from 'react'

function WeekChamp(props){
  let champInfos = props.weekChampInfo;
  return(
    <div class="best-of-week">
      <div class="of-the-week-wrapper shadow">
        <div class="of-the-week-title-wrapper">
          <h5>
            <span class="of-the-week-color-span-small">Best 5</span>
            <span class="of-the-week-unimportant-span">Champion</span>
          </h5>
        </div>
        <div class="of-the-week-content">
          <ul>
            {getChampList(champInfos)}
          </ul>
        </div>
      </div>
    </div>
  );
}
function getChampList(champInfos){
  let champList = [];
  for(var i=0; i < champInfos.length; i++){
    champList.push(
      <li class="flex-table-cell-no-border">
        <div class="of-the-week-best-img-wrapper">
          <img class = "champ-icon" src={champInfos[i].champImg}/>
        </div>
        <div class="point-bar-small"></div>
        <div class="of-the-week-best-desc shadow">                    
          <img class="pos-icon" src={champInfos[i].champRoleIcon}/>
          <div class="of-the-week-unimportant-span-small">{champInfos[i].champName}</div>
          <div class="of-the-week-desc-span-small">
            {getChampStatList(champInfos[i].champStats)}
          </div>
        </div>
      </li> 
    );
  }
  return champList;
}
function getChampStatList(champStats){
  let champStatList = [];
  for(var i=0; i < champStats.length; i++){
    champStatList.push(
      <ul>
        <li class="flex-table-cell-small">{champStats[i].title}</li>
        <li class="flex-table-cell-small">{champStats[i].value}</li>
      </ul>
    );
  }
  return champStatList;
}

export default WeekChamp;