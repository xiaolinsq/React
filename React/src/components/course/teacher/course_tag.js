import React, { Component } from 'react';
import '../../../style/course/top.css';
import { Link } from 'react-router-dom';

class CourseTag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: ''
    };
  }

  componentDidMount() {
    console.log('history1', this.props);
  }

  render() {
    const id = this.props.CourseId;

    return (
      <div className="divtop">
        <ul>
          <Link to={`/teacher/${id}`}>
            <li>课程内容</li>
          </Link>
          <li onClick={() => this.setState({ index: 'homework' })}>
            <Link to={`/tag/${this.state.index}}/${id}`}>作业</Link>
          </li>
          <Link to={`/experiment/${id}`}>
            <li>实验</li>
          </Link>
          <li>大作业</li>
          <li>测验</li>
          <li>通知</li>
        </ul>
        <ul style={{ float: 'right' }}>
          <li>讨论</li>
          <li>学习进度</li>
          <li>课程评价</li>
          <li>公共资源库</li>
          <li>案例库</li>
          <li>题库</li>
        </ul>
      </div>
    );
  }
}

export default CourseTag;
