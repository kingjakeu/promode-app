import './App.css';
import { Component } from 'react';
import Toc from './components/Toc'
import Content from './components/Content'
import Subject from './components/Subject'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      select_content_id:2,
      subject : {title: 'web', sub: 'world wide web'},
      welcome: {title:'Welcome', desc: 'hello hello'},
      contents : [
        {id:0 , title:'html', desc:'is hyper'},
        {id:1 , title:'bulbak css', desc:'is style'},
        {id:2 , title:'js', desc:'is script'}
      ]
    }
  }
  create(){
      this.state.contents.push({id: this.state.contents.length+1, title: 'jake', desc: 'add'});
  }
  render(){
      console.log('app lender')
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
        var i = 0;
        var data = this.state.contents[this.state.select_content_id];
        _title = data.id
        _desc = data.desc
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
              this.create()
              this.setState({mode: 'welcome'});
          }.bind(this)}
        >
        </Subject>
        <Toc onChangePage={function(id){
            this.setState({
                mode: 'read',
                select_content_id: Number(id)
            });
        }.bind(this)} 
        data={this.state.contents}>
        </Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;
