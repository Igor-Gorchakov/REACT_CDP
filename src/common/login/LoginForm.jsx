import React from "react";
import { Button, Col, Grid, Row, FormControl, ControlLabel } from "react-bootstrap";
import "./loginForm.css"

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fields: {},
      errorMessages: {}
    };
  }

  handleSubmit() {
    this.validateLoginForm();
  }

  validateLoginForm() {
    let fields = this.state.fields;
    let errorMessages = {};
    this.validateLoginField(fields["login"], errorMessages);
    this.validatePasswordField(fields["password"], errorMessages);
    this.setState({errorMessages: errorMessages, fields: fields });
    if (Object.keys(errorMessages).length === 0) {
      console.log("The Login form is valid, redirecting to the Courses page");
    }
  }
  
  validateLoginField(loginValue, errorMessages) {
    if (loginValue === "") {
      errorMessages["login"] = "Please enter the Login field";
    } else {
      let validLoginRegexp = /^[a-zA-Z]+$/i;
      if (!validLoginRegexp.test(loginValue)) {
        errorMessages["login"] = "Wrong login : Field «Login» should contain only Latin letters";
      } 
    }
  }

  validatePasswordField(passwordValue, errorMessages) {
    if (passwordValue === "") {
      errorMessages["password"] = "Please enter the Password field";
    } else {
      let validLoginRegexp = /^[a-zA-Z0-9]+$/i;
      if (!validLoginRegexp.test(passwordValue)) {
        errorMessages["password"] = "Wrong password : Field Password» should contain only Latin letters and digits";
      } 
    }
  }

  handleInputChange(field, e) {         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render() {
    return (
      <div className="loginForm">
        <Grid>
          <Row className="show-grid">
            <Col xsHidden md={4}/>
            <Col xs={6} md={4}>
              <ControlLabel>Login</ControlLabel>
              <FormControl type="text" placeholder="Login" onChange={this.handleInputChange.bind(this, "login")} value={this.state.fields["login"]}/>
              <span style={{color: "red"}}>{this.state.errorMessages["login"]}</span>
            </Col>
            <Col xsHidden md={4}/>
          </Row>

          <Row className="show-grid">
            <Col xsHidden md={4}/>
            <Col xs={6} md={4}>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Password" onChange={this.handleInputChange.bind(this, "password")} value={this.state.fields["password"]}/>
              <span style={{color: "red"}}>{this.state.errorMessages["password"]}</span>
            </Col>
            <Col xsHidden md={4}/>
          </Row>

          <Row>
            <Col smOffset={4} sm={1}>
              <Button type="submit" onClick={this.handleSubmit}>Sign in</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
  
export default LoginForm;