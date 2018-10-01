import React, { Component } from 'react';
import axios from 'axios';
import { fetchCourse } from '../../../../actions/index';
import { connect } from 'react-redux';
import '../../../../App.css';

class HomeworkDetail extends Component {
  componentDidMount() {
    console.log('redux');
    console.log(this.props);
    const id = this.props.CourseId;

    console.log(id);

    this.props.fetchCourse(id);
  }

  render() {
    var k = 0;
    if (!this.props.courses) {
      return <div>login...</div>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>序号</th>
            <th>章节</th>
            <th>名称</th>
            <th style={{ width: '200px' }}>开始时间</th>
            <th style={{ width: '200px' }}>截止时间</th>
            <th
              style={{
                width: '300px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
              备注
            </th>
            <th>操作</th>
          </tr>
        </thead>

        {this.props.courses.map((item, i) => {
          return (
            <tbody key={i}>
              {item.homework.map((data, j) => {
                if (data.type === '') {
                  k = k + 1;
                  return (
                    <tr key={j}>
                      <th>
                        <input
                          type="checkbox"
                          style={{ width: '20px', height: '20px' }}
                        />
                      </th>
                      <th>{k}</th>
                      <th>{item.name}</th>
                      <th>{data.name}</th>
                      <th>{data.startDate}</th>
                      <th>{data.endDate}</th>
                      <th
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                        {data.introduction}
                      </th>
                      <th>批改</th>
                    </tr>
                  );
                }
              })}
            </tbody>
          );
        })}
      </table>
    );
  }
}

function mapStateToProps(state) {
  console.log('test', state);
  return { courses: state.courses.section };
}

export default connect(
  mapStateToProps,
  { fetchCourse }
)(HomeworkDetail);
