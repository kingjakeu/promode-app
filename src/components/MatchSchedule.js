import {Component} from 'react';

class MatchSchedule extends Component{
    render(){
      var data = this.props.match_schedule;
      var table_elments = []
      
      // for(var i = 0; i < data.length; i++){
      //   table_elments.push(
      //     <thead>
      //       <tr>
      //         <th scope="col">{data[i].title}</th>
      //       </tr>
      //     </thead>
      //   );

      //   var table_rows = [];
      //   var j = 0;
      //   for(j = 0; j < data.content.length; j++){
      //     var match = data.matches[j];
      //     table_rows.push(
      //       <tr>
      //         <td>match.blue</td>
      //         <td>match.result</td>
      //         <td>match.red</td>
      //       </tr>
      //     );
      //   }
      //   table_elments.push(
      //     <tbody>
      //       {table_rows}
      //     </tbody>
      //   );
      // }

      return(
          <div class="side-content-wrapper h100 shadow">
            <div class="side-info-title">
              <h5 class="side-info-title">경기 일정</h5>
            </div>
            <div class="side-info-body">
              <table>
                {table_elments}
              </table>
            </div>
          </div>
      );
    }
}

export default MatchSchedule;
