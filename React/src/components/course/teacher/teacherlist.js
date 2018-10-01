import React, { Component } from 'react';

import axios from 'axios';
import '../../../style/course/courselist.css';
import { Collapse, Popconfirm } from 'antd';
import AddElement from './modalbox/addelement';
import AddChapter from './modalbox/addchapter';
import AddHomework from './modalbox/addhomework';
const Panel = Collapse.Panel;

//折叠框样式
const customPanelStyle = {
  border: 0,
  marginTop: '11px'
};
class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addElementState: false, //添加教学元素模态窗状态
      addChapterState: false, //添加章节模态窗状态
      addHomeworkState: false, //添加作业模态窗状态
      sectionId: '', //课程//
      type: '', //作业类型
      name: 'chaper'
    };
  }

  //判断模态窗的状态
  changeState(index, state) {
    switch (index) {
      case 'addelement':
        this.setState({
          addElementState: state
        });
        break;
      case 'addhomework':
        this.setState({
          addHomeworkState: state
        });
        break;
      case 'addchapter':
        this.setState({
          addChapterState: state
        });
        break;
      default:
    }
    this.setState({
      sectionId: ''
    });
  }

  //删除教学元素
  deleteUnit(id) {
    axios.post('/lms/json/creator/deleteUnit', `id=${id}`);
  }
  //删除作业
  deleteHomework(id) {
    axios.post('/lms/json/creator/deleteHomework', `id=${id}`);
  }
  //删除章节
  deleteSection(id) {
    axios.post('/lms/json/creator/deleteSection', `id=${id}`);
  }

  //编辑章节
  formSection(courseId, sectionId) {
    axios.post(
      '/lms/json/creator/formSection',
      `courseId=${courseId}&sectionId=${sectionId}`
    );
    this.setState({ addChapterState: true, sectionId: sectionId });
  }

  render() {
    // console.log('modal', this.state.modalbox);
    return (
      <div className="maincourse">
        <Collapse bordered={false}>
          {this.props.course.map((item, i) => {
            return (
              <Panel
                key={i}
                header={
                  <div
                    className={this.state.name}
                    onClick={() => {
                      this.setState({ name: 'chaper chaper-background' });
                    }}>
                    <span className="num">{i + 1}</span>
                    <span className="chaper-title">
                      <span className="title">{item.name}</span>
                    </span>

                    <span class="c_right">
                      <Popconfirm
                        title="将同时删除下属资源，您确认要删除该章节吗？"
                        okText="确定"
                        cancelText="取消">
                        <img
                          src={require('../../../source/delete.png')}
                          alt=""
                          onClick={() => this.deleteSection(item.id)}
                        />
                      </Popconfirm>
                    </span>
                    <span class="c_right">
                      <img
                        src={require('../../../source/edit.png')}
                        alt=""
                        onClick={() =>
                          this.formSection(this.props.CourseId, item.id)
                        }
                      />
                    </span>
                  </div>
                }
                style={customPanelStyle}>
                <div className="elenment">
                  {item.unit.map(data => {
                    return (
                      <div className="section" id={i}>
                        <span className="s_icon" />
                        <span className="cell_talk">
                          <span className="s_title">{data.name}</span>
                        </span>
                        <span class="s_right">
                          <img
                            src={require('../../../source/delete.png')}
                            alt=""
                            onClick={() => this.deleteUnit(data.id)}
                          />
                        </span>
                        <span class="s_right">
                          <img
                            src={require('../../../source/edit.png')}
                            alt=""
                          />
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
                        <span class="s_right">
                          <img
                            src={require('../../../source/delete.png')}
                            alt=""
                            onClick={() => this.deleteHomework(data.id)}
                          />
                        </span>
                        <span class="s_right">
                          <img
                            src={require('../../../source/edit.png')}
                            alt=""
                          />
                        </span>
                        <span class="s_right">|</span>
                        <span class="s_right">
                          <img
                            src={require('../../../source/correct.png')}
                            alt=""
                          />
                        </span>
                      </div>
                    );
                  })}
                  <div class="add_it">
                    <span class="add_btn" />
                    <input
                      type="button"
                      value="+教学元素"
                      style={{ left: '70px' }}
                      onClick={() =>
                        this.setState({
                          addElementState: true,
                          sectionId: item.id
                        })
                      }
                    />
                    <input
                      type="button"
                      value="+作业"
                      style={{ left: '170px' }}
                      onClick={() =>
                        this.setState({
                          addHomeworkState: true,
                          sectionId: item.id
                        })
                      }
                    />
                    <input
                      type="button"
                      value="+实验"
                      style={{ left: '270px' }}
                      onClick={() =>
                        this.setState({
                          addHomeworkState: true,
                          sectionId: item.id,
                          type: 1
                        })
                      }
                    />
                    <input
                      type="button"
                      value="+大作业"
                      style={{ left: '370px' }}
                      onClick={() =>
                        this.setState({
                          addHomeworkState: true,
                          sectionId: item.id,
                          type: 2
                        })
                      }
                    />
                  </div>
                </div>
              </Panel>
            );
          })}
        </Collapse>
        <div className="add-course">
          <input
            type="button"
            value="+添加章节"
            style={{ left: '35px' }}
            id="add-course-input1"
            onClick={() => this.setState({ addChapterState: true })}
          />
          <input
            type="button"
            value="查看期末考试"
            style={{ left: '135px', width: '100px' }}
            id="add-course-input2"
          />
        </div>

        <AddChapter
          changeState={(index, state) => this.changeState(index, state)}
          visible={this.state.addChapterState}
          CourseId={this.props.CourseId}
          sectionId={this.state.sectionId}
        />

        <AddElement
          changeState={(index, state) => this.changeState(index, state)}
          visible={this.state.addElementState}
          sectionId={this.state.sectionId}
        />

        <AddHomework
          changeState={(index, state) => this.changeState(index, state)}
          visible={this.state.addHomeworkState}
          sectionId={this.state.sectionId}
          type={this.state.type}
        />
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

  setClassName(name) {}
}

export default TeacherList;
