import React from 'react';

function MainEvent(props){
  let mainTopic = props.mainTopic;
  return(
    <div className="main-topic-wrapper w70">
      <div className="topic-desc">
        <h4 className="topic-title font-white">{mainTopic[0].title}</h4>
        <p className="font-white">{mainTopic[0].eventDate}</p>
        <h5 className="topic-sub-titl font-white">{mainTopic[0].subTitle}</h5>
        <button className="topic-btn">바로가기</button>
      </div>
      <div className="topic-img-wrapper">
        <img className="topic-img" src={mainTopic[0].blueImg}/>
        <div className="topic-img-sub">
          <h5 className="font-white">VS</h5>
        </div>
        <img className="topic-img" src={mainTopic[0].redImg}/>
      </div>
    </div>
  );
}
export default MainEvent