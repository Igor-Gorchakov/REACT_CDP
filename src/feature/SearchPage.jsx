import React from 'react';
import Page from '../common/page/Page.jsx';
import CoursesLogo from '../common/course/coursesLogo/CoursesLogo.jsx';
import SearchCoursesPanel from '../common/course/searchCoursesPanel/SearchCoursesPanel.jsx';
import CoursesContainer from '../common/course/coursesContainer/CoursesContainer.jsx';
import CourseItem from "../common/course/coursesContainer/courseItem/CourseItem.jsx";

class SearchPage extends React.Component {

  render() {
    let userLogin = "admin";
    return (
      <Page headerCaption="Courses">
        <CoursesLogo userLogin={userLogin}/>
        <SearchCoursesPanel/>
        <CoursesContainer>
          <CourseItem 
            caption="Database Application Development." 
            description="This Database Program with PL/SQL training shows you how to develop stored procedures, functions, packages and database triggers. You'll learn to manage PL/SQL program units and dependencies, while using of some of the Oracle-supplied packages."
            date="11.04.2018" 
            authors="Abellera, R; Garnica, G."
          />
          <CourseItem 
            caption="Data Warehousing." 
            description="This Intro to SQL training teaches you basic concepts of relational databases and the SQL programming language. You'll gain essential SQL skills to write queries against single & multiple tables, manipulate data in tables & create database objects." 
            date="18.07.2018" 
            authors="Finnigan, P; Cimolini, P."
          />
          <CourseItem 
            caption="MySQL Database Administration." 
            description="The MySQL Cluster training course covers how to install and configure a real-time database cluster at the core of your application. Expert instructors will teach you how to design and maintain your clusters for high availability and scalability by using MySQL Cluster's open-source and enterprise components." 
            date="09.04.2018" 
            authors="Vesterli, S.E; Charalambides, S."
          />
        </CoursesContainer>
      </Page>
    );
  }
}

export default SearchPage;
