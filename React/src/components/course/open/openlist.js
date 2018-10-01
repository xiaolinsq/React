import React, { Component } from 'react';
import '../../../style/course/courselist.css';
import $ from 'jquery';

class OpenList extends Component {
  componentDidMount() {
    $('.chaper1').click(function() {
      $('.chaper').slideToggle('slow');
    });
  }

  render() {
    return (
      <div className="maincourse">
        {this.props.course.map((item, i) => {
          return (
            <div className="chaper">
              <span>
                <img
                  src={require('../../../source/next.png')}
                  alt=""
                  className="iconfont"
                />
              </span>
              <span className="num">{i + 1}</span>
              <span className="chaper-title">
                <span className="title">{item.name}</span>
              </span>
              {item.unit.map(data => {
                return (
                  <div className="section">
                    <span className="s_icon" />
                    <span className="cell_talk">
                      <span className="s_title">{data.name}</span>
                    </span>
                  </div>
                );
              })}
              {item.homework.map(data => {
                return (
                  <div className="section">
                    <span className="s_icon" />
                    <span className="cell_talk">
                      <span className="s_title">
                        {this.typejudge(data.type)}:
                      </span>
                      <span className="s_text">{data.name}</span>
                      <span className="s_title">截止时间</span>
                      <span className="s_text">{data.endDate}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  typejudge(type) {
    switch (type) {
      case 1:
        return '课程实验';

      case 2:
        return '课程大作业';

      default:
        return '课程作业';
    }
  }
}

export default OpenList;
