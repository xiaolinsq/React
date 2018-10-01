import React, { Component } from 'react';
import axios from 'axios';
import '../../../../App.css';

class Test extends Component {
  render() {
    if (!this.props.course) {
      return <div>login...</div>;
    }
    return (
      <table className="table">
        <tr>
          <th />
          <th>序号</th>
          <th>章节</th>
          <th>名称</th>
          <th>开始时间</th>
          <th>截止时间</th>
          <th>备注</th>
          <th>操作</th>
        </tr>

        {this.props.course.map((item, i) => {
          return (
            <tr>
              <th>
                <input
                  type="checkbox"
                  style={{ width: '20px', height: '20px' }}
                />
              </th>
              <th>{i + 1}</th>
              <th>{item.name}</th>
              <th>aa</th>
              <th>{item.startDate}</th>
              <th>{item.endDate}</th>
              <th>aaaa</th>
              <th>批改</th>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Test;
