import './App.css';
import { Component } from 'react';
import Toc from './components/Toc'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import MatchSchedule from './components/MatchSchedule'


class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 2;
    this.state = {
      mode: 'create',
      select_content_id:2,
      subject : {title: 'web', sub: 'world wide web'},
      welcome: {title:'Welcome', desc: 'hello hello'},
      contents : [
        {id:0 , title:'html', desc:'is hyper'},
        {id:1 , title:'bulbak css', desc:'is style'},
        {id:2 , title:'js', desc:'is script'}
      ],

      match_schedule : [
        {
          title: "3.31 수",
          matches: [
            {blue: "DWG", red: "T1", result: "17:00"},
            {blue: "DWG", red: "T1", result: "20:00"},
          ]
        }
      ]
    }
  }
  create(){
      this.state.contents.push({id: this.state.contents.length+1, title: 'jake', desc: 'add'});
  }

  render(){
    return (
      <div className="App">
        <MatchSchedule match_schedule={this.state.match_schedule}></MatchSchedule>
      </div>
    );
  }
}
export default App;
