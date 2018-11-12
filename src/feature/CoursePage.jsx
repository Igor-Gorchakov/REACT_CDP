import React from 'react';
import Page from '../common/page/Page.jsx';
import CourseLogo from '../common/course/courseLogo/CourseLogo.jsx';
import CourseForm from '../common/course/CourseForm.jsx';

class CoursePage extends React.Component {
  render() {
    let courseNumber = 12;
    let userLogin = "admin";
    let headerCaption = "Course/".concat(courseNumber);
    return (
      <Page headerCaption={headerCaption}>
        <CourseLogo courseNumber={courseNumber} userLogin={userLogin}/>
        <CourseForm/>
      </Page>
    );
  }
}

export default CoursePage;
