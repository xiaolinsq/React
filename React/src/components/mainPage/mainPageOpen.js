import React, { Component } from 'react';
import NewHeader from '../newheader';
import Footer from '../footer';
import OpenCourseList from './openCourseList';
import '../../style/mainPage/mainPageOpen.css';

class MainPageOpen extends Component {
  render() {
    return (
      <div>
        <NewHeader />
        <div className="up">
          <div className="upBG">
            <h1>公开课市场</h1>
          </div>
        </div>
        <OpenCourseList />
        <Footer />
      </div>
    );
  }
}
export default MainPageOpen;
