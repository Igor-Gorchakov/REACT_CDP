import React from 'react';
import LoginForm from '../common/login/LoginForm.jsx';
import Logo from '../common/page/Logo.jsx';
import LogoImage from '../common/login/login-logo.jpg';

class LoginPageContainer extends React.Component {
  render() {
    return (
      <div>
        <Logo logoImage={LogoImage} />
        <LoginForm/>
      </div>
    );
  }
}

export default LoginPageContainer;
