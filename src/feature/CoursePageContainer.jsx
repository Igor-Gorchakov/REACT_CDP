import React from 'react';
import Logo from '../common/page/Logo.jsx';
import CourseForm from '../common/course/CourseForm.jsx';
import LogoImage from '../common/course/info.png';

class CoursePageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Logo logoImage={LogoImage} courseNumber={this.props.courseNumber} userLogin={this.props.userLogin}/>
        <CourseForm/>
      </div>
    );
  }
}

export default CoursePageContainer;
