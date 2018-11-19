import React from 'react';
import Logo from '../common/page/Logo.jsx';
import LogoImage from '../common/course/coursesLogo/courses-logo.jpeg';
import SearchCoursesPanel from '../common/course/searchCoursesPanel/SearchCoursesPanel.jsx';
import CoursesContainer from '../common/course/coursesContainer/CoursesContainer.jsx';
import CourseItem from "../common/course/coursesContainer/courseItem/CourseItem.jsx";

class SearchPageContainer extends React.Component {

  render() {
    return (
      <div>
        <Logo logoImage={LogoImage} userLogin={this.props.userLogin}/>
        <SearchCoursesPanel/>
        <CoursesContainer>
          <CourseItem
            caption="Database Application Development." 
            description="This Database Program with PL/SQL training shows you how to develop stored procedures, functions, packages and database triggers. You'll learn to manage PL/SQL program units and dependencies, while using of some of the Oracle-supplied packages."
            date="11.04.2018" 
            authors={["Abellera, R", "Garnica, G."]}
            duration="01:05:11"
          />
          <CourseItem
            caption="Data Warehousing." 
            description="This Intro to SQL training teaches you basic concepts of relational databases and the SQL programming language. You'll gain essential SQL skills to write queries against single & multiple tables, manipulate data in tables & create database objects." 
            date="18.07.2018"
            authors={["Finnigan, P", "Cimolini, P."]}
            duration="00:44:41"
          />
          <CourseItem
            caption="MySQL Database Administration."
            description="The MySQL Cluster training course covers how to install and configure a real-time database cluster at the core of your application. Expert instructors will teach you how to design and maintain your clusters for high availability and scalability by using MySQL Cluster's open-source and enterprise components." 
            date="09.04.2018"
            authors={["Vesterli, S.E", "Charalambides, S."]}
            duration="02:12:52"
          />
        </CoursesContainer>
      </div> 
    );
  }
}

export default SearchPageContainer;
