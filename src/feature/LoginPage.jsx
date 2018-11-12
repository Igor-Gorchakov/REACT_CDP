import React from 'react';
import Page from '../common/page/Page.jsx';
import LoginForm from '../common/login/LoginForm.jsx';
import LoginLogo from '../common/login/LoginLogo.jsx';

class LoginPage extends React.Component {

  render() {
    return (
      <Page headerCaption="Login page">
        <LoginLogo/>
        <LoginForm/>
      </Page>
    );
  }
}

export default LoginPage;
