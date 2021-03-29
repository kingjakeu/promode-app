import './App.css';
import { Component } from 'react';
import Toc from './components/Toc'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Subject from './components/Subject'
import Control from './components/Control'


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
      ]
    }
  }
  create(){
      this.state.contents.push({id: this.state.contents.length+1, title: 'jake', desc: 'add'});
  }
  getContent(){
    var _title, _desc = null, _article = null;
    if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }else if(this.state.mode === 'read'){
          var data = this.state.contents[this.state.select_content_id];
          _title = data.id
          _desc = data.desc
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      } else if(this.state.mode === 'create'){
          _article = <CreateContent onSubmit={function(_title, _desc){
             this.max_content_id += 1;
             var _content = this.state.contents.concat({id:this.max_content_id, title: _title, desc: _desc});
             this.setState({
                 contents: _content
              });
          }.bind(this)}></CreateContent>
      } else if(this.state.mode === 'update'){
        _article = <UpdateContent 
        data = {this.state.contents[this.state.select_content_id]}
        onSubmit={function(_id, _title, _desc){
            var _content = Array.from(this.state.contents);
            _content[this.state.select_content_id] = {id: _id, title: _title, desc: _desc};
            this.setState({
                contents: _content
            });
        }.bind(this)}></UpdateContent>
      }
      return _article;
  }
  render(){
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;
