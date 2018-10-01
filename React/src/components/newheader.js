import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/newheader.css';

class NewHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newheader">
        <div className="header-area">
          <div className="logo2" />

          <span className="span-style">我的课程</span>
          <Link to={'/public.html'}>
            <span className="span-style">公开课</span>
          </Link>

          <div className="logReg">
            <div className="teacher-info">
              <a>你好，系统管理员</a>
              <span>|</span>
              <a>
                <img src={`/lms/ajax/images/news.png`} />
              </a>
              <span>|</span>
              <a
                onClick={() => {
                  this.props.history.replace('/');
                }}>
                退出
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewHeader;
