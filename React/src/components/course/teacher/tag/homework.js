import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NewHeader from '../../../newheader';
import Footer from '../../../footer';
import CourseTag from '../course_tag';
import HomeworkDetail from './homework_detail';

class Homework extends Component {
  render() {
    return (
      <div style={{ background: '#eeeeee' }}>
        <NewHeader />
        <div className="course-box">
          <CourseTag />
          <HomeworkDetail CourseId={this.props.match.params.id} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homework;
