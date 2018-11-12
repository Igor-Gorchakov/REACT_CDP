import React from "react";
import { Image, Row } from "react-bootstrap";
import logoImage from "./login-logo.jpg";

class LoginLogo extends React.Component {
  render() {
    return (
      <Row>
        <div className="logo-image"><Image src={logoImage}/></div>
      </Row>
    )
  }
}
  
export default LoginLogo;