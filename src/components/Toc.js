import { Component } from 'react';

class Toc extends Component{
    shouldComponentUpdate(newProps, newState){
        return !(newProps.data === this.props.data);
    }
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id+".html"}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >
                    {data[i].title}
                </a>
            </li>)
            i += 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Toc;