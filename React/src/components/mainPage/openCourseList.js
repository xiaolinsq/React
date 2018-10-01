import React, { Component } from 'react';
import axios from 'axios';
import '../../style/mainPage/openCourseList.css';

class OpenCourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: []
    };
    this.getOpenCourse(`/lms/json/learning/listAllCourse`);
  }

  render() {
    return (
      <div className="openCourseList">
        {this.state.open.map(item => {
          return (
            <div className="singleCourse">
              <div
                className="singleCourseImg"
                style={{
                  // background: url(`http://211.66.87.236/lms/custom/${item.filepath}`) no-repeat center center;
                  backgroundImage: `url(http://211.66.87.236/lms/custom/${
                    item.filepath
                  })`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  position: 'relative',
                  height: '144px',
                  backgroundSize: '100% auto !important'
                }}
              />
              <div className="singleCourseInfo">
                <h2>{item.name}</h2>
                <div className="infoDetail">
                  <p>
                    授课教师<a>{item.courseTeacherString}</a>
                  </p>
                  <p>学习人数{item.studentNum}人</p>
                </div>
                <div className="date">
                  开始{item.startDateString}-{item.endDateString}结束
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  getOpenCourse(url) {
    const request = axios.get(url).then(res => {
      this.setState({
        open: res.data.open
      });
    });
  }
}

export default OpenCourseList;
