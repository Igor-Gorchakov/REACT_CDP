import React from "react";
import {Form, FormGroup, Col, FormControl, ControlLabel, Button, Modal } from "react-bootstrap";
import "./courseForm.css"

class CourseForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHideModalWindow = this.handleHideModalWindow.bind(this);
    this.state = {
        fields: {
            caption: this.props.caption || "",
            description: this.props.description || "",
            date: this.props.date || "",
            authors: this.props.authors || "",
            duration: this.props.duration || ""
        },
        errorMessages: []
    };
  }

  handleHideModalWindow() {
    this.setState({ errorMessages: [] });
  }

  handleInputChange(field, e) {         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  handleSubmit() {
    this.validateCourseForm();
  }

  validateCourseForm() {
    let fields = this.state.fields;
    let errorMessages = [];
    if (fields["caption"] === "") {
        errorMessages.push("Caption field is required");
    }
    if (fields["description"] === "") {
        errorMessages.push("Description field is required");
    }
    if (fields["date"] === "") {
        errorMessages.push("Date field is required");
    }
    if (fields["authors"] === "") {
        errorMessages.push("Authors field is required")
    }
    if (fields["duration"] === "") {
        errorMessages.push("Duration field is required")
    }
    this.setState({errorMessages});
    if (Object.keys(errorMessages).length === 0) {
      console.log("The Course form is valid!");
    }
  }

  render() {
    return (
        <div className="course-form">
           <Modal bsSize="small" aria-labelledby="contained-modal-title-sm" show={this.state.errorMessages.length > 0}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title">You have error messages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.state.errorMessages.map((errorMessage, index) => {
                            return <li style={{color: "red"}} key={index}>{errorMessage}</li>;
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHideModalWindow}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Form horizontal>
                <FormGroup controlId="caption">
                    <Col componentClass={ControlLabel} sm={4}>
                        Caption
                    </Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="Caption" onChange={this.handleInputChange.bind(this, "caption")} value={this.state.fields["caption"]}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="description">
                    <Col componentClass={ControlLabel} sm={4}>
                        Description
                    </Col>
                    <Col sm={4}>
                        <FormControl componentClass="textarea" placeholder="Description" onChange={this.handleInputChange.bind(this, "description")} value={this.state.fields["description"]} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="date">
                    <Col componentClass={ControlLabel} sm={4}>
                        Date
                    </Col>
                    <Col sm={4}>
                        <FormControl type="date" placeholder="Date in dd.mm.yyyy format" onChange={this.handleInputChange.bind(this, "date")} value={this.state.fields["date"]}/>
                    </Col>
                </FormGroup>

                 <FormGroup controlId="authors">
                    <Col componentClass={ControlLabel} sm={4}>
                        Authors
                    </Col>
                    <Col sm={4}>
                        <FormControl componentClass="textarea" placeholder="Authors" onChange={this.handleInputChange.bind(this, "authors")} value={this.state.fields["authors"]} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="duration">
                    <Col componentClass={ControlLabel} sm={4}>
                        Date
                    </Col>
                    <Col sm={4}>
                        <FormControl type="date" placeholder="Duration in dd.mm.yyyy format" onChange={this.handleInputChange.bind(this, "duration")} value={this.state.fields["duration"]}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="buttons">
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <Button type="button" onClick={this.handleSubmit}>Save</Button>
                        <Button type="button">Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
  }
}
 
export default CourseForm;