import React, { Component } from 'react';
import '../../../style/course/coursetype.css';
import CourseTag from './course_tag';
import TeacherList from './teacherlist';
import TeacherInfo from '../common/teacher_information';
import axios from 'axios';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    };
    const id = this.props.CourseId;

    this.fetchCourse(id);
  }

  componentDidMount() {}

  render() {
    console.log('llllllllllllllll', this.props);
    const CourseId = this.props.CourseId;

    return (
      <div className="course-box">
        <CourseTag CourseId={CourseId} />
        <div className="main-area">
          <TeacherList course={this.state.course} CourseId={CourseId} />
          <TeacherInfo CourseId={CourseId} />
        </div>
      </div>
    );
  }

  fetchCourse(id) {
    const ROOT_URL = '/lms/json/learning/listTeacherResource';

    axios.get(`${ROOT_URL}?courseId=${id}`).then(res => {
      this.setState({
        course: res.data.section
      });
    });
  }
}

export default Teacher;
