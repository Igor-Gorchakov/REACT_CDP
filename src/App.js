import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './feature/LoginPage.jsx';
import SearchPage from './feature/SearchPage.jsx';
import CoursePage from './feature/CoursePage.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginPage/>
        <SearchPage/>
        <CoursePage/>
      </div>
    );
  }
}

export default App;
