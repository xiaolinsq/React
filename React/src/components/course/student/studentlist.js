import React, { Component } from 'react';
import '../../../style/course/courselist.css';
import $ from 'jquery';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

class StudentList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      course: this.props.course
    };
  }
  componentDidMount() {
    $('.s_right button').hover(
      function() {
        $(this).css('display', 'block');
      },
      function() {
        $(this).css('display', 'none');
      }
    );
  }

  render() {
    console.log(this.state.count);
    console.log('please', this.props.course);
    return (
      <div className="maincourse">
        {this.props.course.map((item, i) => {
          return (
            <div
              className="chaper"
              onClick={e => {
                console.log('222222');
                console.log(e.target);
                $('.section').slideToggle('slow');
              }}>
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
                    <span class="s_right">
                      <img
                        src={require('../../../source/download.png')}
                        alt=""
                      />
                    </span>
                    <span class="s_right">
                      <img src={require('../../../source/play.png')} alt="" />
                    </span>
                    <span class="s_right">
                      <button>继续学习</button>
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

export default StudentList;
