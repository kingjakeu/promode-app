import React from 'react'

function MainEvent(props){
  let mainTopic = props.mainTopic;

  return(
    <div class="main-topic-wrapper w70">
      <div class="topic-desc">
        <h4 class="topic-title font-white">{mainTopic[0].title}</h4>
        <p class="font-white">{mainTopic[0].eventDate}</p>
        <h5 class="topic-sub-titl font-white">{mainTopic[0].subTitle}</h5>
        <button class="topic-btn">바로가기</button>
      </div>
      <div class="topic-img-wrapper">
        <img class="topic-img" src={mainTopic[0].blueImg}/>
        <div class="topic-img-sub">
          <h5 class="font-white">VS</h5>
        </div>
        <img class="topic-img" src={mainTopic[0].redImg}/>
      </div>
    </div>
  );
}
export default MainEvent