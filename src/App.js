import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './common/page/Header.jsx';
import Footer from './common/page/Footer.jsx';

import LoginPageContainer from './feature/LoginPageContainer.jsx';
import CoursePageContainer from './feature/CoursePageContainer.jsx';
import SearchPageContainer from './feature/SearchPageContainer.jsx';

class App extends React.Component {

  render() {
    const loginPageHeaderCaption = "Login page";

    const courseNumber = 12;
    const userLogin = "admin";
    const coursePageContainerCaption = "Course/".concat(courseNumber);

    const searchPageContainerCaption = "Search course";

    return (
      <div>
        <Header headerCaption={loginPageHeaderCaption}/>
        <LoginPageContainer/>
        <CoursePageContainer courseNumber={courseNumber} userLogin={userLogin} />
        <SearchPageContainer userLogin={userLogin} />
        <Footer/>
      </div>
    );
  }
}

export default App;
